import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaService } from 'src/app/shared/service-asistencia/asistencia.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AsistenciaModel } from 'src/app/shared/service-asistencia/asistencia.model';

@Component({
  selector: 'app-agregar-asistencia',
  templateUrl: './agregar-asistencia.component.html',
  styleUrls: ['./agregar-asistencia.component.css']
})
export class AgregarAsistenciaComponent implements OnInit {

  asistencia = new AsistenciaModel("","","","","");

  constructor(
    private asistenciaService: AsistenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    this.asistenciaService.agregarAsistencia(this.asistencia).subscribe(data => {
      alert(data)
      window.location.reload();
    })
  }
}
