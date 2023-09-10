import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AnuncioModel } from 'src/app/shared/service-anuncio/anuncio.model';
import { AnuncioService } from 'src/app/shared/service-anuncio/anuncio.service';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';

@Component({
  selector: 'app-listar-anuncio',
  templateUrl: './listar-anuncio.component.html',
  styleUrls: ['./listar-anuncio.component.css']
})
export class ListarAnuncioComponent implements OnInit {

  anuncios: Observable<AnuncioModel[]> | undefined;

  public oculto = true
  public id_anuncio:any;

  constructor(
    private anuncioService: AnuncioService,
    protected sessionStorageService: SessionStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  url = this.anuncioService.BASE_URL+'/images/'

  ngOnInit() {
    let rol = this.sessionStorageService.get('rol')

    if (rol != '1') {
      this.sessionStorageService.clear()
    }
    this.anuncios = this.anuncioService.obtenerAnuncios();
  }

  showConfirmBox(id_an:any) {
    this.id_anuncio = id_an
    this.oculto = false
  }

  closeConfirmBox() {
    this.oculto = true
  }

  isConfirm(answer:boolean) {
    if (answer) {
      this.anuncioService.eliminarAnuncio(this.id_anuncio).subscribe(data => {
        window.location.reload();
      })
    }
    this.closeConfirmBox();
  }

}
