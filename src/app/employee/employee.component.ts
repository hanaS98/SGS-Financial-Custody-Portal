import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faFilter, faPlusCircle, faPenToSquare, faTrash,faAngleDown,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from './model/emp';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit , OnChanges{
  faFilter = faFilter;
  faPlusCircle = faPlusCircle;
  faPenToSquare=faPenToSquare;
  faTrash=faTrash;
  faAngleDown=faAngleDown;
  faMagnifyingGlass=faMagnifyingGlass;
  filterId='';
  filterDate='';
  showmore:boolean = false;
  allEmployee:Employee[]=[];
  
  filterdTextValue:string;

  all=false;
  new=false;
  processing=false;
  uncomplete=false;
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    //this.fetchEmployee();
    
  }
  ngOnChanges(){
    
  }
  /*
  onFetchEmployee(){
    this.fetchEmployee();
  }
  */
  
  employee=[
    {id:1,orderNum:"1111111",date:"09/27/2022",projectName:"الاستكشاف العام للاحافير الفقارية في المملكة العربية السعودية",cost:"2300",status:"قيد الإنتظار "},
    {id:2,orderNum:"2121212",date:"08/28/2022",projectName:"المعادن الاستراتيجية في الدرع العربي",cost:"2300",status:"مرفوض"},
    {id:3,orderNum:"3232323",date:"07/29/2022",projectName:"رحلة صحراء الربع الخالي",cost:"2300",status:"مقبول"},
  ]
  /*
  private fetchEmployee(){
    this.http.get<{[key:string]:Employee}>('https://angular-f03c3-default-rtdb.firebaseio.com/employeeCustody.json')
    .pipe(map((res)=>{
      const emp = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          emp.push({...res[key],id:key})
        }
      }
      return emp;
    }))
    .subscribe((emp)=>{
      console.log(emp);
      this.allEmployee =emp;
    }
    )
  }
*/
  
  filterText:string = "all";
  selectedFilterText:EventEmitter<string> = new EventEmitter<string>();

  onFilterSelected(){
    this.selectedFilterText.emit(this.filterText);
  }
  filterdTextMethod(text:string){
    this.filterdTextValue = text;
  }
  
  
  selected(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    let idElement = document.getElementById(value);
    
    let otherEle = document.querySelectorAll('.requests');
    otherEle.forEach((ele)=>{
      ele.classList.remove('active');
    })

    idElement.classList.add("active");    
    this.filterdTextValue = value;
  }

  
  
}
