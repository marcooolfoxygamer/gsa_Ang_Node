import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';

@Component({
  selector: 'app-bienvenida-instructor',
  templateUrl: './bienvenida-instructor.component.html',
  styleUrls: ['./bienvenida-instructor.component.css']
})
export class BienvenidaInstructorComponent implements OnInit {

  constructor (
    protected sessionStorageService: SessionStorageService
  ) { }

  ngOnInit() {

    let rol = this.sessionStorageService.get('rol')

    if (rol != '3') {
      this.sessionStorageService.clear()
    }
  }

}
