import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaService } from 'src/app/shared/service-asistencia/asistencia.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AsistenciaModel } from 'src/app/shared/service-asistencia/asistencia.model';

@Component({
  selector: 'app-editar-asistencia',
  templateUrl: './editar-asistencia.component.html',
  styleUrls: ['./editar-asistencia.component.css']
})
export class EditarAsistenciaComponent implements OnInit {

  id_registro_asis = ''
  asistencia = new AsistenciaModel("","","","","")

  constructor(
    private asistenciaService: AsistenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id_registro_asis = this.route.snapshot.params['id_registro_asis']

    this.asistenciaService.obtenerAsistencia(this.id_registro_asis).subscribe(data => {
      this.asistencia = data[0]
      let f = data[0]['fecha_asis']
      let [j,k] = f.split('T')

      data[0]['fecha_asis'] = j

    }, error => {
      console.log(error);
    })
  }

  onSubmit() {
    console.log('onSubmit');

    this.asistenciaService.actualizarAsistencia(this.asistencia).subscribe(data => {
      alert(data)
      this.router.navigate(['../asistencia_listado'])
    })
  }

}
