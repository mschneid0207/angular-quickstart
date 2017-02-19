import {Input, Component} from "@angular/core";
import {Customer} from './customer';

@Component({
    moduleId: module.id,
    selector: 'appConfirm',
    templateUrl: 'confirm-directive.html'
})


export class ConfirmDirective {
    @Input() appConfirm = () => {};
    @Input() confirmMessage = 'Are you sure you want to do this?????';
    @Input() newCustomer: Customer;

   /* @HostListener('click', ['$event'])
    confirmFirst(event: Event) {
        const confirmed = window.confirm(this.confirmMessage);

        if(confirmed) {
            this.appConfirm();
        }
    }*/
}