export class AsistenciaModel {
  constructor(
    public id_registro_asis:string,
    public id_instruc_asis:string,
    public fk_id_aprend_asis:string,
    public fecha_asis:string,
    public estado_asis: string,
  ) { }
}

export class AsistenciaListaModel {
  constructor(
    public id_registro_asis:string,
    public id_instruc_asis:string,
    public fk_id_aprend_asis:string,
    public nom1_user:string,
    public ape1_user:string,
    public ape2_user:string,
    public correo_sena_user:string,
    public fk_anteced_salud_sel:string,
    public anteced_salud_inp:string,
    public fecha_asis:string,
  ) { }
}
