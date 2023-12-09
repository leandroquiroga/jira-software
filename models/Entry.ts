import mongoose, { Model, Schema } from "mongoose";
import { Entry } from "@/interfaces";

export interface EntrySchema extends Entry {};

const entrySchema = new Schema({
  description: { 
    type: String,
    require: true,
  },
  createdAt: {
    type: Number
  } ,
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'finished'],
      message: '{VALUE} no es un estado permitido'
    },
    default: 'pending'
  },
});

/**
 * Como nuestra bases de datos se ejecuta por cada request y para que no se vuelva a crear el modelo 
 * de nuestra bases de datos, debemos chequear que ya exista. Si existe, no crea nuevamente nuestro
 * modelo sino que utiliza que se genero por primera vez, en caso contrario al ejecutarse por primera vez 
 * se crea el modelo
 */

const EntryModel: Model<EntrySchema> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;