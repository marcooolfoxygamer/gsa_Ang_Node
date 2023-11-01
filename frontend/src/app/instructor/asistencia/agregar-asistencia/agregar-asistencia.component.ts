import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaService } from 'src/app/shared/service-asistencia/asistencia.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AsistenciaModel } from 'src/app/shared/service-asistencia/asistencia.model';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-agregar-asistencia',
  templateUrl: './agregar-asistencia.component.html',
  styleUrls: ['./agregar-asistencia.component.css']
})
export class AgregarAsistenciaComponent implements OnInit {

  asistencia = new AsistenciaModel("","","","","");

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
  }

  onSubmit() {

    if (this.asistencia.id_instruc_asis == '') {
      alert("Por favor, digite su número de documento en el campo de la identificación del instructor");
    }
    else if (this.asistencia.fk_id_aprend_asis == '') {
      alert("Por favor, digite el número de documento del aprendiz al que le está tomando la asistencia");
    }
    else {

      if (this.asistencia.fecha_asis == '') {
        this.asistencia.fecha_asis = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      }
      
      let id_instructor:any = this.sessionStorageService.get('id_user')

      if (id_instructor == this.asistencia.id_instruc_asis) {

        this.asistenciaService.validarAprendiz(this.asistencia).subscribe(data => {
          if (data == 'Si existe') {
            this.asistenciaService.agregarAsistencia(this.asistencia).subscribe(data => {
              alert(data)
              window.location.reload();
            })
          } else {
            alert('La identificación de aprendiz que llenó en el registro no existe en el sistema. Por favor, inténtelo de nuevo')
          }
        })
      } else {
        alert('La identificación que llenó en el registro como suya, es incorrecta. Por favor, inténtelo de nuevo')
      }
    }
  }
}
