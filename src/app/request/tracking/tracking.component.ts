import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit,OnChanges {
  @Input() currentstate=1;
  constructor() { }
  
  ngOnInit(): void { 
  }
  ngOnChanges(){
    this.currentstep();
    console.log(this.currentstate);
    
  }
  
  currentstep(){
    
    let state = this.currentstate;    
    (document.querySelectorAll<HTMLElement>(".traking-element")).forEach((ele)=>{  
      if(this.currentstate>0){
        ele.classList.add('active');
        this.currentstate = this.currentstate-1;
      }      
    }
    ) 
    
    this.currentstate = state;
    
    let activated = (document.querySelectorAll<HTMLElement>(".traking-element.active")).length;
    if(activated>this.currentstate){
      (document.querySelectorAll<HTMLElement>(".traking-element")).forEach((ele)=>{
        ele.classList.remove('active'); 
        if(this.currentstate>0){
          ele.classList.add('active');
          this.currentstate = this.currentstate-1;
        }       
      }
      ) 
    }
    this.currentstate = state;

    if(this.currentstate===1){
      document.getElementById("first-page").style.display="block";
      document.getElementById("second-page").style.display="none";
      document.getElementById("third-page").style.display="none";
      document.getElementById("last-page").style.display="none";
    }else if(this.currentstate===2){
      document.getElementById("first-page").style.display="none";
      document.getElementById("second-page").style.display="block";
      document.getElementById("third-page").style.display="none";
      document.getElementById("last-page").style.display="none";
    }else if(this.currentstate===3){
      document.getElementById("first-page").style.display="none";
      document.getElementById("second-page").style.display="none";
      document.getElementById("third-page").style.display="block";
      document.getElementById("last-page").style.display="none";
    }else if(this.currentstate===4){
      document.getElementById("first-page").style.display="none";
      document.getElementById("second-page").style.display="none";
      document.getElementById("third-page").style.display="none";
      document.getElementById("last-page").style.display="block";
    }
  }
}
