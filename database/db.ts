import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
*/

const mongoConnection = {
  isConneted: 0
};

const environmentDB = process.env.URI_MONGO_DB || ''

export const connectDB = async () => {

  // Evaluamos la conexion a nuestra bases de datos 
  if (mongoConnection.isConneted) {
    console.log('Ya estamos conectados 💻');
    return
  };

  // Revisamos si hay una conexion existente 
  if (mongoose.connections.length >= 0) {
    mongoConnection.isConneted = mongoose.connections[0].readyState // Nos quedamos con el estado de la conexion

    // Reutilizamos la conexion 
    if (mongoConnection.isConneted === 1) {
      console.log('Utilizando la conexion anterior 🧭');
      return
    };

    // Nos desconectamos si tenemos cualquer estado que no sea el 1 
    await disconnetDB();
  }

  // Conexion a la bases de datos
  await mongoose.connect(environmentDB);
  mongoConnection.isConneted = 1; 
  console.log(`Database connected to collection ${mongoose.connection.name} 🚀`)
};

export const disconnetDB = async () => {

  // Revisamos si ya estamos desconectado
  if (mongoConnection.isConneted === 0) return;

  await mongoose.disconnect();
  console.log('Database no connected ❌')
}