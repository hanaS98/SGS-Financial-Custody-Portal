import { Component, OnInit } from '@angular/core';
import { faBars,faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faUser,faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser =faUser;
  faBars=faBars;
  faEarthAsia =faEarthAsia;
  faEyeSlash = faEyeSlash;


  showNavList =false;
  default=true;

  constructor() { }

  ngOnInit(): void {
  }
  displayNavList(){
    this.showNavList = !this.showNavList;
    
    
  }
}
