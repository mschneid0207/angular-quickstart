import './rxjs-extensions';

import {NgModule, Input}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';

// components
import {AppComponent}   from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';

// PrimeNg
import {InputTextModule, DataTableModule, SharedModule} from 'primeng/primeng';

// services
import {HeroService} from './hero.service';

// routing
import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,  AppRoutingModule, InputTextModule, DataTableModule, SharedModule],
    declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
