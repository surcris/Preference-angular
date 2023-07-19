import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtatModeService {
  public darkMode = false;
  constructor() { }

  changeEtatdarkMode(){
    this.darkMode =! this.darkMode;
  }
}
