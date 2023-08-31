import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanificadorService } from 'src/app/shared/service-planificador/planificador.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PlanificadorModel, MusculosModel, Ejercicios_MusculosModel } from 'src/app/shared/service-planificador/planificador.model';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  subm:boolean = false

  ngOnInit() {
      this.musculos = this.planificadorService.obtenerMusculos();
  }

  onSubmit() {
    console.log('onSubmit');

    this.planificadorService.agregarPlanificador(this.planificador).subscribe(data => {
      if (data == 'Se agregó correctamente') {
        this.ejerc_musc = this.planificadorService.obtenerEjercicios_Musculo(this.planificador.musculo)
        this.subm=true
      }
    })
  }
}
