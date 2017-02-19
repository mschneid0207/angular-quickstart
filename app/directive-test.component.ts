import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import any = jasmine.any;
import anything = jasmine.anything;

@Component({
    selector: 'app-visit-rangle',
    template: `
<appConfirm [newCustomer]="this.selectedCustomer"></appConfirm>
   <!-- <button 
      type="button" 
      [appConfirm]="visitRangle" 
      confirmMessage="Click ok to visit Rano!">
      Visit Rangle
    </button>-->
  `
})


export class DirectiveTestComponent implements OnInit {




    private defaultCustomer: any = {
    }
    private selectedCustomer: Customer = new Customer(this.defaultCustomer);

    ngOnInit(): void {
       //this.newCustomer = new Customer(any);
       this.selectedCustomer.firstName = 'Markus';
    }

    visitRangle() {
        console.log('Visiting rangle');
        location.href = 'https://rangle.io';
    }
}