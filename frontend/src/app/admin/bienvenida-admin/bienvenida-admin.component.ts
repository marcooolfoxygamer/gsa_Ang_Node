import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';

@Component({
  selector: 'app-bienvenida-admin',
  templateUrl: './bienvenida-admin.component.html',
  styleUrls: ['./bienvenida-admin.component.css']
})
export class BienvenidaAdminComponent implements OnInit {

  constructor (
    protected sessionStorageService: SessionStorageService
  ) { }

  ngOnInit() {

    let rol = this.sessionStorageService.get('rol')

    if (rol != '1') {
      this.sessionStorageService.clear()
    }
  }
}
