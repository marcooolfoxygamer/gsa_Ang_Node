export class UsuarioModel {
  constructor(
    public id_user: string,
    public fk_tipo_user: string,
    public tipo_user: string,
    public nom1_user: string,
    public nom2_user: string,
    public ape1_user: string,
    public ape2_user: string,
    public correo_sena_user: string,
    public contrasena: string,
    public fk_anteced_salud_sel: string,
    public anteced_salud_inp: string,
    public estado_user: string
  ) { }
}

export class TiposUsuarios {
  constructor(
    public cod_tipo_user: string,
    public tipo_user: string
  ) { }
}

export class Antecedentes {
  constructor(
    public antecedente: string,
  ) { }
}