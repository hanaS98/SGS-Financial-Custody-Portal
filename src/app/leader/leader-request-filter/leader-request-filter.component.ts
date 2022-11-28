import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-leader-request-filter',
  templateUrl: './leader-request-filter.component.html',
  styleUrls: ['./leader-request-filter.component.css']
})
export class LeaderRequestFilterComponent implements OnInit {
  faMagnifyingGlass=faMagnifyingGlass;
  constructor() { }

  ngOnInit(): void {
  }

}
