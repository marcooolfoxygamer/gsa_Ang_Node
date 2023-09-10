import { Injectable } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  set(key:string,value:string) {
    sessionStorage.setItem(key, value)
  }

  get(key:string) {
    return sessionStorage.getItem(key)
  }

  // remove(key: string) {
  //   sessionStorage.removeItem(key)
  // }

  clear() {
    sessionStorage.clear()
    this.router.navigate(['/inicio'])
  }

}
