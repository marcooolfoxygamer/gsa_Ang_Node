import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AnuncioService } from 'src/app/shared/service-anuncio/anuncio.service';
import { AnuncioModel } from 'src/app/shared/service-anuncio/anuncio.model';

@Component({
  selector: 'app-editar-anuncio',
  templateUrl: './editar-anuncio.component.html',
  styleUrls: ['./editar-anuncio.component.css']
})
export class EditarAnuncioComponent implements OnInit {

  id_anunc = ""
  imagen = ""
  anuncio = new AnuncioModel("","","","","","");
  
  constructor(
    private anuncioService: AnuncioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id_anunc = this.route.snapshot.params['id_anunc']

    this.anuncioService.obtenerAnuncio(this.id_anunc).subscribe(data => {
      this.anuncio = data[0]
      this.imagen = this.anuncio.img_anunc
    }, error => {
      console.log(error);
    })
  }

  selectImage(event: any) {
    const file = event.target.files[0];

    this.imagen = file;
  }

  onSubmit() {
    console.log('onSubmit');

    if (typeof this.imagen === "string"){
      this.anuncioService.actualizarAnuncio(this.anuncio).subscribe(data => {
          alert(data)
          this.router.navigate(['../anuncios_listado'])
        })
    }
    else {
      let formData = new FormData();
      formData.append('file',this.imagen);

      this.anuncioService.agregarImagen(formData).subscribe(data => {
        if (data == 'No hay archivos'){
          alert('Por favor, inserte un archivo para poner de imagen')
        }
        else {
          this.anuncio.img_anunc = data
          this.anuncioService.buscarImagen(this.anuncio.img_anunc).subscribe(data2 => {
            if (data2 == `No hay registros`) {
              this.anuncioService.actualizarAnuncio(this.anuncio).subscribe(data3 => {
                alert(data3)
                this.router.navigate(['../anuncios_listado'])
              })
            } else {
              alert('Ya tenemos una imagen registrada con el mismo nombre. Por favor, cambie el nombre del archivo')
            }
          })
        }
      })
    }
  }
}
