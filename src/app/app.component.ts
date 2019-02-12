import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
//////////////////////////////////////////////////////////////////
  counter:number =  0; //starts count number of clicks to 0

  onButtonClick()     //method to add 1 to each click
  {
    this.counter++;
  }
//////////////////////////////////////////////////////////////////
  onButtonClick2()     //method to add 1 to each  double click
  {
    this.counter2++;
  }
  counter2:number =  0; //starts count number of clicks to 0 for double click

//////////////////////////////////////////////////////////////////////
  hide:boolean = true;
  onHide()    
  {
    console.log("image clicked")
    if(this.hide == false)
    {
      this.hide = true;
    }else{
      this.hide = false;
    }
  }



}
