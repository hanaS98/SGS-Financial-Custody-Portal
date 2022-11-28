import { Component, OnInit } from '@angular/core';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css','./print.component.css']
})
export class InvoiceComponent implements OnInit {
  faPrint=faPrint;
  constructor() { }

  ngOnInit(): void {
  }
  printInvoice(){
    try {
      // Print for Safari browser
      document.execCommand('print', false, null)
    } catch {
      print();
    }
  }

}
