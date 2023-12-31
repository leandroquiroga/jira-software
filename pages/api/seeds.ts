import { db, seedData } from '@/database';
import { Entry } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string;
};

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

  // Verificamos si el ambiente es productivo
  if (process.env.NODE_ENV === 'production') {
    
    return res.status(401).json({
      message: 'No titne acceso a este endpoint'
    });
  
  }

  // Conexion a la bases de datos
  await db.connectDB();

  await Entry.deleteMany();
  await Entry.insertMany(seedData.entries)

  // Desconexion a la bases de datos
  await db.disconnetDB();

  res.status(200).json({ message: "Proceso finalizado OK ✅" });
}