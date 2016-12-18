import {HeroService} from "./hero.service";
import {Component} from "@angular/core";

@Component({
    selector: 'customer-detail-selector',
    template: `<h1>TEST</h1>`

})

export class CustomerDetailComponent  {

    constructor(private heroService: HeroService) {

    }

}