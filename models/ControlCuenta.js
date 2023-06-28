const { Schema, model } = require("mongoose");

const ControlCuentaSchema = Schema({
  idReserva: {
    type: String,
    required: true
  },
  recepcionista: {
    type: String,
    required: true
  },
  nombrePax: {
    type: String,
    required: true
  },
  fechaActual: {
    type: String,
    required: true
  },
  detalleAbono: {
    type: String,
    required: true
  },
  saldo: {
    type: Number,
    required: true
  },
  credito: {
    type: Number,
    required: true
  },
  abono: {
    type: Number,
    required: true,
  },
  observaciones:{
    type: String,
  },
});

ControlCuentaSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("ControlCuenta", ControlCuentaSchema);