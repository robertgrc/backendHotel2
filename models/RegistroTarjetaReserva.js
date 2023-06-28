const { Schema, model } = require("mongoose");

const RegistroTarjetaReservaSchema = Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  nacionalidad: {
    type: String,
  },
  profesion: {
    type: String,
  },
  procedencia: {
    type: String,
  },
  edad: {
    type: Number,
  },
  estadoCivil: {
    type: String,
  },
  direccion: {
    type: String,
  },
  motivoViaje: {
    type: String,
  },
  tieneEquipaje: {
    type: String,
  },
  tipoHabitacion: {
    type: [],
  },
  fechaIngreso: {
    type: String,
    required: true,
  },
  fechaSalida: {
    type: String,
    required: true,
  },
  observaciones: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

RegistroTarjetaReservaSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("RegistroTarjetaReserva", RegistroTarjetaReservaSchema);
