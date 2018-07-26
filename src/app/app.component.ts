import { Component } from '@angular/core';
import { angularMath } from 'angular-ts-math';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Brain Teaser';
  randomNumber :number;
  points :number =0;

  
  constructor(){
     this.randomGenerator();
  }
  randomGenerator():void{
   this.randomNumber= angularMath.nextIntegerOfNumber(angularMath.getRandom()*10);
  }

  onOddClick(){
    if(this.randomNumber%2!=0){
      this.points++;
      this.randomGenerator();
    }
    else{
      window.alert('Game Over');
      this.points=0;
      this.randomGenerator();
      
    }
  }

  onEvenClick(){
    if(this.randomNumber%2==0){
      this.points++;
      this.randomGenerator();
    }
    else{
      window.alert('Game Over');
      this.points=0;
      this.randomGenerator();
    }


    
  }
  
}
