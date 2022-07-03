import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstName:string;
  counter=0

  constructor() {
    this.firstName="Capiyo the genious man"
   }

  ngOnInit(): void {
  }

  increment(){
    this.counter=this.counter+5
  }
  decrement(){
    this.counter=this.counter-10
  }
  alertName(name:string){ 
    if(name.length<=4){
      alert(`${name} is not a good  name baby plz`)
    }
    else{
      alert(`${name} yaap you have a ery nice name`)
      
      
    }
  }

}
