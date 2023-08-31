export class AnuncioModel {
  constructor(
    public id_anunc:string,
    public fk_id_admin_anunc: string,
    public titulo_anunc: string,
    public desc_anunc: string,
    public img_anunc: string,
  ) { }
}