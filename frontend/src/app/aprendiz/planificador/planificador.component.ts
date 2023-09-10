import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanificadorService } from 'src/app/shared/service-planificador/planificador.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PlanificadorModel, MusculosModel, Ejercicios_MusculosModel } from 'src/app/shared/service-planificador/planificador.model';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';

@Component({
  selector: 'app-planificador',
  templateUrl: './planificador.component.html',
  styleUrls: ['./planificador.component.css']
})
export class PlanificadorComponent implements OnInit {

  planificador = new PlanificadorModel("","");
  musculos: Observable<MusculosModel[]> | undefined;
  ejerc_musc: Observable<Ejercicios_MusculosModel[]> | undefined;

  constructor(
    private planificadorService: PlanificadorService,
    protected sessionStorageService: SessionStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  subm:boolean = false

  ngOnInit() {
    
    let rol = this.sessionStorageService.get('rol')

    if (rol != '2') {
      this.sessionStorageService.clear()
    }

    this.musculos = this.planificadorService.obtenerMusculos();
  }

  onSubmit() {
    console.log('onSubmit');

    let id_ap:any = this.sessionStorageService.get('id_user')
    this.planificador.id_aprend = id_ap

    this.planificadorService.agregarPlanificador(this.planificador).subscribe(data => {
      if (data == 'Se agregó correctamente') {
        this.ejerc_musc = this.planificadorService.obtenerEjercicios_Musculo(this.planificador.musculo)
        this.subm=true
      }
    })
  }
}
