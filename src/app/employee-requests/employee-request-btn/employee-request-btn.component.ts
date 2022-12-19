import { Component, OnInit } from '@angular/core';
import { faPlusCircle,faExclamation } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { user} from '../../employee/model/emp';
import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { CustodyService } from 'src/app/Service/custody.service';

@Component({
  selector: 'app-employee-request-btn',
  templateUrl: './employee-request-btn.component.html',
  styleUrls: ['./employee-request-btn.component.css']
})
export class EmployeeRequestBtnComponent implements OnInit {
  faPlusCircle=faPlusCircle;
  faExclamation=faExclamation;
  userInf:user[]=[];
  hasCust=false;
  constructor(private http:HttpClient,private router:Router, private custodyService:CustodyService) { }

  ngOnInit(): void {
  }
  checkHasCustody(kid:number){
    this.router.navigate(['/employee/request']);
    this.custodyService.checkHasCustody().subscribe((emp)=>{
      
      let searchedElement = emp.find((emp)=>{return emp.userId === kid });
      if(searchedElement.userCustody===true){
        this.router.navigate(['/employee/request']);
      }else{
        this.hasCust=true;
        document.getElementById('exampleModal').ariaModal='true';
        document.getElementById('exampleModal').classList.add('show');
        document.getElementById('exampleModal').style.display="block";
        document.getElementById('exampleModal').setAttribute('role','dialog');
        document.body.classList.add('modal-open');
        document.body.style.overflow="hidden";
        document.getElementById("k").style.display="block";
      }   
    }
    )    
  }
  closeDialogBox(){
    document.getElementById("k").style.display="none";
    document.getElementById('exampleModal').classList.remove('show');
    document.getElementById('exampleModal').style.display="none";
    document.body.classList.remove('modal-open');
    document.body.style.overflow="auto";
  }
}
