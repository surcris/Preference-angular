import { Component } from '@angular/core';
import { EtatModeService } from '../etat-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public darkMode: boolean;
  constructor(private etatMode:EtatModeService){
    this.darkMode = etatMode.darkMode;
  }
  ngOnInit(): void {
    
  }
  
  affDarkMode() {
    this.etatMode.changeEtatdarkMode()
    this.darkMode = this.etatMode.darkMode;
    console.log(this.etatMode.darkMode,this.darkMode)
  }

  getClassByDarkMode():string{
    if (this.etatMode.darkMode) {
      return 'menu-content-dark ';
    } else {
      return 'menu-content-white';
    }
  }
  
}
