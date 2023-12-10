import { db } from '@/database';
import { Entry, EntrySchema } from '@/models';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = { message: string; code: number; error: string } | EntrySchema;

const TIMEOUTREQUEST = 5000;

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      message: "ID invalid",
      code: 400,
      error: "Bad Request",
    });
  }

  switch (req.method) {
    case "GET":
      return getEntryByID(req, res);
    case "PUT":
      return updateEntryByID(req, res);
    case "DELETE":
      return deleteEntryByID(req, res);
    default:
      return res.status(400).json({
        message: "Please check the method, error path or method HTTP",
        code: 400,
        error: "Bad Request",
      });
  }
}



const getEntryByID = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      message: "ID is not valid",
      code: 400,
      error: "Bad Request",
    });
  }

  const existID = await Entry.findById(id);

  if (!existID) {
    return res.status(404).json({
      message: `${id} is not exist in the database `,
      code: 404,
      error: "Not found",
    });
  }

  return res.status(200).json(existID);
};
const updateEntryByID = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      message: "ID is not valid",
      code: 400,
      error: "Bad Request",
    });
  }

  try {
    await db.connectDB();

    // Buscamos el entry por id en nuestra bases de datos
    const getEntryByID = await Promise.race<EntrySchema | null>([
      Entry.findById(id),
      new Promise<EntrySchema | null>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), TIMEOUTREQUEST)
      ),
    ]);

    // Chequeamos que el entry exista
    if (!getEntryByID) {
      db.disconnetDB();
      return res.status(404).json({
        message: `${id} is not exist in the database `,
        code: 404,
        error: "Not found",
      });
    }

    // Si existe aramamos el nuevo entry, sino mantenemos los cambios
    const {
      description = getEntryByID.description,
      status = getEntryByID.status,
    } = req.body;

    const updateEntry = await Promise.race([
      Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), TIMEOUTREQUEST)
      ),
    ]);

    return res.status(200).json(updateEntry);
    
  } catch (error: any) {
    console.log(error);
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
    await db.disconnetDB();
  }
};
const deleteEntryByID = async(req: NextApiRequest, res: NextApiResponse) => {};