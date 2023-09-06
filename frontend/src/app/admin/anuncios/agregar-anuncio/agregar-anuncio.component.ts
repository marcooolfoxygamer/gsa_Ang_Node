import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AnuncioService } from 'src/app/shared/service-anuncio/anuncio.service';
import { AnuncioModel } from 'src/app/shared/service-anuncio/anuncio.model';

@Component({
  selector: 'app-agregar-anuncio',
  templateUrl: './agregar-anuncio.component.html',
  styleUrls: ['./agregar-anuncio.component.css']
})
export class AgregarAnuncioComponent implements OnInit{

  imagen = "";
  anuncio = new AnuncioModel("","","","","","");
  
  constructor(
    private anuncioService: AnuncioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectImage(event: any) {
    const file = event.target.files[0];

    this.imagen = file;
    // console.log(this.imagen)
  }

  onSubmit() {
    console.log('onSubmit');

    let formData = new FormData();
    formData.append('file',this.imagen);

    this.anuncioService.agregarImagen(formData).subscribe(data => {
      this.anuncio.img_anunc = data

      this.anuncioService.buscarImagen(this.anuncio.img_anunc).subscribe(data2 => {
        if (data2 == 'Ya tenemos una imagen registrada con el mismo nombre. Por favor, cambie el nombre del archivo') {
          alert(data2)
        } else {
          this.anuncioService.agregarAnuncio(this.anuncio).subscribe(data3 => {
            alert(data3)
            this.router.navigate(['../anuncios_listado'])
          })
        }
      })
    })
  }
}
