import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/database';
import { Entry, EntrySchema } from '@/models';



type Repsonse =
  | {message: string, code: number, error: string}
  | EntrySchema[]
  | EntrySchema;
  
const TIMEOUTREQUEST = 5000;

export default function handler(req: NextApiRequest, res: NextApiResponse<Repsonse>) {

  // Dependiendo del metodo HTTP entrante, realizamos una peticion diferente
  switch (req.method) {
    case 'GET':
      return getEntriesDB(res)
    case 'POST': 
      return postEntryDB(req,res)
    
    default:
      return res.status(400).json(
        {
          message: "Please check the method, error path or method HTPP",
          code: 400,
          error: 'Bad Request'
        });
  }


}

// Buscar todos los entries disponible en nuestra bases de datos
const getEntriesDB = async (res: NextApiResponse) => {

  try {
    await db.connectDB();

  /**
    * Con Promise.race nos aseguramos que pueda ocurrir cualquiera de las dos promesa, 
    * en caso de que supere los 10s lanzamos un error de timeout.
    * De esta manera nos aseguramos que no haya una demora en la peticion a la bases de datos
  */ 
    const response = await Promise.race([
      Entry.find().sort({ createAt: "asc" }) as unknown as EntrySchema,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), TIMEOUTREQUEST)
      ),
    ]);

    res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    if (error.message === 'Timeout') {
      return res.status(504).json({
        message: "Please try again request to database",
        code: 504,
        error: "Gateway Timeout",
      });
    }

    return res.status(500).json({
      message: "Please contact with administrator",
      code: 500,
      error: "Internal server Error",
    });
  } finally {
    await db.disconnetDB();
  }
};

// Agrega un entry a nuestra bases de datos
const postEntryDB = async (req: NextApiRequest, res: NextApiResponse) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({
      message: "Description is invalid, please verifict the description",
      code: 400,
      error: "Bad Request",
    });
  }

  if (description.length < 3) {
    return res.status(400).json({
      message: "The Description must be at least 3 characters long ",
      code: 400,
      error: "Bad Request",
    });
  }

  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
  });

  try {
    await db.connectDB()
    const response = await Promise.race([
      newEntry.save() as unknown as EntrySchema,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), TIMEOUTREQUEST)
      ),
    ]);
    
    res.status(201).json(response);
  } catch (error: any) {
    console.log(error)
    if (error.message === "Timeout") {
      return res.status(504).json({
        message: "Please try again request to database",
        code: 504,
        error: "Gateway Timeout",
      });
    }

    return res.status(500).json({
      message: "Please contact with administrator",
      code: 500,
      error: "Internal server Error",
    });
  } finally {
    await db.disconnetDB()
  }
}