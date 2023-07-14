import { Component, OnInit} from '@angular/core';
import { ChartService } from '../chart.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  
  dateDay:string="";
  d = new Date();
  clic:number = 0;
  listJour = ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"]
  prec:number = 0;
  actu:number = this.d.getDay();
  nexte:number = 0;
  listDateDay = [];
  listPart = [
    {
      name:"Vue",
      part:20
    },
    {
      name:"Angular",
      part:80
    },
    
  ]
  listData = [
    {
      name:"Vue",
      value:20
    },
    {
      name:"Angular",
      value:80
    },
    
  ]
  constructor(private chartService:ChartService){
    
  }
  

  ngOnInit(): void {
    // this.actu = 0
    this.initDate();
    this.chartService.initCanvas("myChart");
    this.chartService.graphCircle(this.listPart)

    this.chartService.initCanvas("myStat");
    this.chartService.grilleAxe(this.listData)
  }

  initDate(): void{
    if (this.actu == 0) {
      this.prec = this.listJour.length - 1;
      this.nexte = this.actu + 1;
    } else if (this.actu == 6) {
      this.prec = this.actu - 1;
      this.nexte = 0;
    } else {
      this.prec = this.actu - 1;
      this.nexte = this.actu + 1;
    }
    
    
    this.listDateDay[0] = this.d.getDate()-1;
    this.listDateDay[1] = this.d.getDate();
    this.listDateDay[2] = this.d.getDate()+1;
  }

  onclic(){
    this.clic++
  }

}
