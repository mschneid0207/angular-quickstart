import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {Customer} from './customer';
import {HeroService} from './hero.service'

@Component({
    moduleId: module.id,
    selector: 'customers-overview',
    templateUrl: 'customer-overview.component.html'

})

export class CustomerOverviewComponent implements OnInit {

    heroes : Customer[];
    customers: Customer[];
    selectedCustomer: Customer;

    constructor(private heroService: HeroService, private router: Router) {
    }

    ngOnInit(): void {
        this.getCustomers();
    }

    getCustomers(): void {
        // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        this.heroService.getCustomers().then(customers => {
            this.customers = customers;
            for(let customer of this.customers) {
                console.log(customer);
            }
        });

        // this.heroService.getCustomers();
        //this.heroService.getCustomers().then(heroes => this.heroes = heroes);
    }

    onClick(customer: Customer): void {
        console.log("delete button was clicked " + customer.id);
        this.heroService.deleteCustomer(customer.id).then(response => {
            this.heroService.getCustomers().then(customers => {
                this.customers = customers;
            })
        });
    }


}


