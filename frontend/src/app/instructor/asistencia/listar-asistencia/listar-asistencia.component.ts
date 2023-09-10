import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AsistenciaListaModel } from 'src/app/shared/service-asistencia/asistencia.model';
import { AsistenciaService } from 'src/app/shared/service-asistencia/asistencia.service';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';

@Component({
  selector: 'app-listar-asistencia',
  templateUrl: './listar-asistencia.component.html',
  styleUrls: ['./listar-asistencia.component.css']
})
export class ListarAsistenciaComponent implements OnInit {

  asistencias: Observable<AsistenciaListaModel[]> | undefined;

  public oculto = true
  public id_reg:any;

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
    
    this.asistencias = this.asistenciaService.obtenerAsistencias();
  }

  showConfirmBox(id_r:any) {
    this.id_reg = id_r
    this.oculto = false
  }

  closeConfirmBox() {
    this.oculto = true
  }

  isConfirm(answer:boolean) {
    if (answer) {
      this.asistenciaService.eliminarAsistencia(this.id_reg).subscribe(data => {
        window.location.reload();
      })
    }
    this.closeConfirmBox();
  }

}
