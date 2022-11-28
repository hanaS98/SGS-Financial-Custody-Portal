import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-requests-filter',
  templateUrl: './employee-requests-filter.component.html',
  styleUrls: ['./employee-requests-filter.component.css']
})
export class EmployeeRequestsFilterComponent implements OnInit {
  faMagnifyingGlass=faMagnifyingGlass;
  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() id = new EventEmitter<string>();
  filterdTextModel:string='';
  


  showFilterText(){
    this.id.emit(this.filterdTextModel);
  }
}
