import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaService } from 'src/app/shared/service-asistencia/asistencia.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AsistenciaModel } from 'src/app/shared/service-asistencia/asistencia.model';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';

@Component({
  selector: 'app-editar-asistencia',
  templateUrl: './editar-asistencia.component.html',
  styleUrls: ['./editar-asistencia.component.css']
})
export class EditarAsistenciaComponent implements OnInit {

  id_registro_asis = ''
  asistencia = new AsistenciaModel("","","","","")
  id_inst_original = ""
  id_aprend_original = ""

  constructor(
    private asistenciaService: AsistenciaService,
    protected sessionStorageService: SessionStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let rol = this.sessionStorageService.get('rol')

    if (rol != '3') {
      this.sessionStorageService.clear()
    }

    this.id_registro_asis = this.route.snapshot.params['id_registro_asis']

    this.asistenciaService.obtenerAsistencia(this.id_registro_asis).subscribe(data => {
      this.asistencia = data[0]
      let f = data[0]['fecha_asis']
      let [j,k] = f.split('T')

      data[0]['fecha_asis'] = j

      this.id_inst_original = data[0]['id_instruc_asis']
      this.id_aprend_original = data[0]['fk_id_aprend_asis']

    }, error => {
      console.log(error);
    })
  }

  onSubmit() {
    console.log('onSubmit');

    let id_instructor:any = this.sessionStorageService.get('id_user')

    if (id_instructor == this.id_inst_original) {

      if (id_instructor == this.asistencia.id_instruc_asis) {

        this.asistenciaService.validarAprendiz(this.asistencia).subscribe(data => {
          if (data == 'Si existe') {
            
            if (this.id_aprend_original == this.asistencia.fk_id_aprend_asis) {
              this.asistenciaService.actualizarAsistencia(this.asistencia).subscribe(data => {
                alert(data)
                this.router.navigate(['../asistencia_listado'])
              })
            } else {
              alert('La identificación del aprendiz que editó en el registro de asistencia no corresponde al que estaba por defecto al crear el registro. Por favor, coloque la identificación del aprendiz que corresponde')
            }
          } else {
            alert('La identificación de aprendiz que llenó en el registro no existe en el sistema. Por favor, inténtelo de nuevo')
          }
        })
      } else {
        alert('La identificación que llenó en el registro como suya es incorrecta. Por favor, inténtelo de nuevo')
      }
    } else {
      alert('El registro de asistencia que está editando no fue creado y/o diligenciado por usted. Por favor, contáctese con la persona que diligenció el registro')
    }
  }
}
