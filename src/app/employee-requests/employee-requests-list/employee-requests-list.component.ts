import { Component, OnInit,OnChanges, ViewChild, Input, Output  } from '@angular/core';


import { Router } from '@angular/router';
import { faPenToSquare, faTrash,faAngleDown,faAngleUp, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../../employee/model/emp';
import { FormGroup, NgForm } from '@angular/forms';
import {CustodyService} from '../../Service/custody.service';

@Component({
  selector: 'app-employee-requests-list',
  templateUrl: './employee-requests-list.component.html',
  styleUrls: ['./employee-requests-list.component.css']
})
export class EmployeeRequestsListComponent implements OnInit,OnChanges {
  faPenToSquare =faPenToSquare;
  faTrash=faTrash;
  faTrashCan=faTrashCan;
  faAngleDown=faAngleDown;
  faAngleUp=faAngleUp;
  allEmployee:Employee[]=[];
  delete = true;
  @Input() filterText:string = '';
  filteredEmployee: Employee[];

  defaultArr: Employee[];

  @ViewChild('updateForm') reactiveForm:FormGroup;
  @ViewChild('updateForm') form: NgForm;

  currentstate =2;
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
    this.custodyService.fetchCustody().subscribe((emp)=>{
      this.allEmployee =emp;
    }
    )    
  }

  DeleteItem(id:string){
    
    //this.http.delete('https://angular-f03c3-default-rtdb.firebaseio.com/employeeCustody/'+id+'.json').subscribe();
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

}
