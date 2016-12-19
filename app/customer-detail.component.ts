import {HeroService} from "./hero.service";
import {Component} from "@angular/core";
import {Customer} from "./customer";
import anything = jasmine.anything;

@Component({
    moduleId: module.id,
    selector: 'customer-detail-selector',
    templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent  {

    private defaultCustomer: any = {
    }
    private selectedCustomer: Customer = new Customer(this.defaultCustomer);

    constructor(private heroService: HeroService) {

    }

    createUser(): void {
        console.log("create user: " + this.selectedCustomer);
        this.heroService.saveCustomer(this.selectedCustomer);
    }

}