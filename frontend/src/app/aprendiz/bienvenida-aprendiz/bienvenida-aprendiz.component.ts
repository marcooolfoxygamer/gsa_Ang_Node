import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';

@Component({
  selector: 'app-bienvenida-aprendiz',
  templateUrl: './bienvenida-aprendiz.component.html',
  styleUrls: ['./bienvenida-aprendiz.component.css']
})
export class BienvenidaAprendizComponent implements OnInit {

  constructor (
    protected sessionStorageService: SessionStorageService
  ) { }

  ngOnInit() {

    let rol = this.sessionStorageService.get('rol')

    if (rol != '2') {
      this.sessionStorageService.clear()
    }
  }
}
