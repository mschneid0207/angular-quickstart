import {Injectable}  from '@angular/core';
import {Hero} from './hero';
import {Customer} from './customer';
import {HEROES} from './mock-heroes';
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';  // URL to web api
    private customerServiceUrl = 'http://localhost:8080/getCustomers';
    private endpoint = 'https://restcountries.eu/rest/v1/region/Europe';
    private headers = new Headers({'Content-Type': 'application/json'});
    private response: String;

    constructor(private http: Http) {
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getCustomers(): Promise<Customer[]> {
        // this.http.get(this.customerServiceUrl).map(response => this.response = response.json());

        // console.log(this.response);


        return this.http.get(this.customerServiceUrl)
            .toPromise()
            .then(response => {
                let customers:Customer[] = [];
                let responseData:any = response.json().customer;
                for (let customer of responseData) {
                    let cust:Customer = new Customer((customer));
                    //console.log("BirthDate: " + cust.birthDate);
                    customers.push(new Customer(customer));
                    //console.log("Customer: " + customer);
                }
                return customers;
                //return response.json().customer;
            })
            .catch(this.handleError);
    }


    /*getHeroes(): Promise<Hero[]> {
     //return HEROES;
     return Promise.resolve(HEROES);
     }*/

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }


}