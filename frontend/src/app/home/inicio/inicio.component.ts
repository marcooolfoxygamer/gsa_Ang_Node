import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  showMenu() {
    let it_id = document.getElementById('_items')!
    it_id.classList.toggle("open")
    let tog_id = document.getElementById('_toggle')!
    tog_id.classList.toggle("close")
  }
}
