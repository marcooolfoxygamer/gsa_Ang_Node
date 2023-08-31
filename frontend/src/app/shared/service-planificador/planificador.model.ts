export class PlanificadorModel {
  constructor(
    public id_aprend:string,
    public musculo: string,
    // public ejercicio: string,
  ) { }
}

export class MusculosModel {
  constructor(
    public musculo: string
  ) { }
}

export class Ejercicios_MusculosModel {
  constructor(
    public pkfk_musculo: string,
    public pkfk_ejercicio: string,
    public imagen_ejerc: string
  ) { }
}
