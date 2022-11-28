import { Component, OnInit,OnChanges, ViewChild, Input, Output  } from '@angular/core';
import { Observable, Subject, tap } from "rxjs";

import { Router } from '@angular/router';
import { faPenToSquare, faTrash,faAngleDown,faAngleUp, faTrashCan,  faXmark , faCheck} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';


import { Employee, Leader } from '../../employee/model/emp';
import { FormGroup, NgForm } from '@angular/forms';
import {CustodyService} from '../../Service/custody.service';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {

  faPenToSquare =faPenToSquare;
  faTrash=faTrash;
  faTrashCan=faTrashCan;
  faAngleDown=faAngleDown;
  faAngleUp=faAngleUp;
  faCircleXmark = faXmark;
  faCircleCheck = faCheck;

  allEmployee:Leader[]=[];
  delete = true;
  @Input() filterText:string = '';
  filteredEmployee: Leader[];

  defaultArr: Leader[];
  currentEmployeeid:string;

  @ViewChild('updateForm') reactiveForm:FormGroup;
  @ViewChild('updateForm') form: NgForm;

  currentstate =2;

  private _refresh = new Subject<void>();
    get refresh(){
        return this._refresh;
    }
    

  /*
  get FilterTextM(){
    return this.filterText;
  }
  */
  FilterTextM(value:string){
    
    this.filterText = value;
    this.filteredEmployee = this.getEmployeeById(value);
    this.defaultArr = this.allEmployee;
    
  }
  
  constructor(private router:Router, private http:HttpClient,private custodyService:CustodyService) { }

  ngOnInit(): void {
    this.fetchEmployee();
   
    //this.filteredEmployee = this.allEmployee;
    
  }
  ngOnChanges(){
    if(this.filterText === undefined){
      
    }else{
      this.FilterTextM(this.filterText);
      
      //this.defaultArr = this.allEmployee;
      this.allEmployee=this.filteredEmployee;
      
    }
  }
  private fetchEmployee(){   
    this.custodyService.fetchEmployee().subscribe((emp)=>{
      this.allEmployee =emp;
    }
    )    
  }

  DeleteItem(id:string){
    
    //this.http.delete('https://financialcustody-2fa62-default-rtdb.firebaseio.com/employeeCustody/'+id+'.json').subscribe();
    document.getElementById(id).remove();   
  }
  
  getEmployeeById(filteredId:string){     
    return this.allEmployee.filter((employee)=>{
      return employee.custodyId ===filteredId;
    })
    
  }

  onEdit(id:string){
    let currentEmployee = this.allEmployee.find((emp)=>{return emp.id === id});
    console.log(currentEmployee);
    
  }


  next(){
    let state = this.currentstate;
    (document.querySelectorAll<HTMLElement>(".traking-element")).forEach((ele)=>{
      if(this.currentstate>0){
        ele.classList.add('active');
        this.currentstate = this.currentstate-1;
      }
    })   
    this.currentstate = state
  }
  
  getNewRequests(){
    return this.allEmployee.filter(emp => emp.state === 'creates');
  }
  @Input() tt:string = 'any';
  
  filter(){
    console.log(this.tt);
  }

  onAccept(id:string){
    let currentEmployee = this.allEmployee.find((emp)=>{return emp.id === id});
    let custodyId:string = currentEmployee.custodyId;
    let custodyDate:string = currentEmployee.custodyDate;
    let projectName:string = currentEmployee.projectName;
    let purpose:string = currentEmployee.purpose;
    let visibility:boolean = currentEmployee.visibility;
    let arr:{} = currentEmployee.arr;
    let cost:string = currentEmployee.cost;
    let extentionNum:string = currentEmployee.extentionNum;
    let phoneNum:string = currentEmployee.phoneNum;
    let state:string = 'accepted';
    let attachment:string = currentEmployee.attachment;
    let data = {custodyId,custodyDate,projectName,purpose,visibility,arr,cost,extentionNum,phoneNum,state,attachment};
    this.updateStatus(id,data);
  }
  onReject(id:string){
    let currentEmployee = this.allEmployee.find((emp)=>{return emp.id === id});
    let custodyId:string = currentEmployee.custodyId;
    let custodyDate:string = currentEmployee.custodyDate;
    let projectName:string = currentEmployee.projectName;
    let purpose:string = currentEmployee.purpose;
    let visibility:boolean = currentEmployee.visibility;
    let arr:{} = currentEmployee.arr;
    let cost:string = currentEmployee.cost;
    let extentionNum:string = currentEmployee.extentionNum;
    let phoneNum:string = currentEmployee.phoneNum;
    let state:string = 'rejected';
    let attachment:string = currentEmployee.attachment;
    let data = {custodyId,custodyDate,projectName,purpose,visibility,arr,cost,extentionNum,phoneNum,state,attachment};
    this.updateStatus(id,data);
  }
  updateStatu(id:string,value:Leader){
    this.http.put('https://financialcustody-2fa62-default-rtdb.firebaseio.com/leaderCustody/'+id+'.json',value)
    .subscribe();
  }

  updateStatus(id:string,value:Leader){
    this.http.put('https://financialcustody-2fa62-default-rtdb.firebaseio.com/leaderCustody/'+id+'.json',value)
    .pipe(
      tap(()=>{
        this._refresh.next();
      })
    ).subscribe();
      
  }

}






  
