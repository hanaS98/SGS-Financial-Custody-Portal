import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './Service/AuthService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'financialCustodies';
  fullName:string;
  userId:number;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.login().subscribe((ele)=>{
      this.fullName = ele.fullName;
    })
   
  }
  
}
