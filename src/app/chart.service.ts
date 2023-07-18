import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  public canvas;
  public ctx;
  constructor() {
    
  }

  initCanvas(balise: any): void {
    this.canvas = document.getElementById(balise);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 250
    this.canvas.height = 250
  }
  drawLineGrille( y: number, color: String) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(10,y);
    this.ctx.lineTo(this.canvas.height,y);
    this.ctx.stroke();
  }
  drawLine( x: number,y: number, color: String) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(0,y);
    this.ctx.lineTo(this.canvas.height,y);
    this.ctx.stroke();
  }
  drawArc(radius: number, startAngle: number, endAngle: number, color: String,arcWidth:number) {
    this.ctx.save();
    this.ctx.lineWidth = arcWidth;
    this.ctx.strokeStyle = color;
    this.ctx.lineCap = 'round';
    this.ctx.beginPath();
    this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, radius, startAngle, endAngle);
    this.ctx.stroke();
    this.ctx.restore();
  }
  graphCircle(nbrData:Array<any>){
    let lastend = 0;
    let totalDataSector = 0;
    let offset = Math.PI / 2;
    let colist = new Array('rgb(211, 209, 69)', 'rgb(32, 32, 32)', 'green', 'orange', 'gray', 'yellow');
    for(let i = 0; i < nbrData.length ; i++){
      
      let arcsector = Math.PI * (2 * (nbrData[i].part/100));
      console.log(i,lastend - offset - (Math.PI / 180) , offset + arcsector + (Math.PI / 180))
      let startArc = lastend - offset + (10/100);
      let endArc = (lastend - offset) + arcsector - (10/100);
      //totalDataSector = nbrData[i].part ;
      this.drawArc(100,startArc,endArc,colist[i],10)
      lastend += arcsector;
    }
    
  }

  grilleAxe(nbrData:Array<any>){
    let XmaxValue=0;
    let YmaxValue=0;
    for (let index = 0; index < nbrData.length; index++) {
      if (nbrData[index].value > XmaxValue) {
        XmaxValue = nbrData[index].value;
      }
    }

    //! AXE X
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(10,this.canvas.height-30);
    this.ctx.lineTo(this.canvas.width,this.canvas.height-30);
    this.ctx.stroke();

    //! AXE Y
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(10,this.canvas.height-30);
    this.ctx.lineTo(10,10);
    this.ctx.stroke();

    //! ligne dans le graph 
    let equart = this.canvas.height - 80;
    for (let index = 0; index < 4; index++) {
      this.drawLineGrille(equart,'white')
      equart -= (this.canvas.width)/5
    }

    //! Donné 
    let maxTaille = this.canvas.height-40;
    equart = (this.canvas.width / 5)+30;
    for (let index = 0; index < nbrData.length; index++) {
      
      let myValueCanvas = maxTaille * (1 - nbrData[index].value / 100);
      console.log(myValueCanvas)
      this.ctx.beginPath();
      this.ctx.lineWidth = 20;
      // this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = 'red';
      this.ctx.moveTo(equart,this.canvas.height-30);
      this.ctx.lineTo(equart, myValueCanvas);
      this.ctx.stroke();

      equart += this.canvas.width / nbrData.length
    }

    
  }
}

