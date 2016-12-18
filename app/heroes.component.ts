import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {Customer} from './customer';
import {HeroService} from './hero.service'

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']

})

export class HeroesComponent implements OnInit {

    heroes : Customer[];
    customers: Customer[];
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
       // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        this.heroService.getCustomers().then(heroes => {
            this.heroes = heroes;
            for(let customer of this.heroes) {
                console.log(customer.birthDate);
            }
        });

       // this.heroService.getCustomers();
        //this.heroService.getCustomers().then(heroes => this.heroes = heroes);
    }

    goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }




    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}

