import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  loger(){
    console.log('je sert pour le login')
  }
}
