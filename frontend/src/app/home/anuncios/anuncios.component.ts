import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnuncioService } from 'src/app/shared/service-anuncio/anuncio.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AnuncioModel } from 'src/app/shared/service-anuncio/anuncio.model';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncios: Observable<AnuncioModel[]> | undefined;

  constructor(
    private anuncioService: AnuncioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      this.anuncios = this.anuncioService.obtenerAnuncios();
  }

}
