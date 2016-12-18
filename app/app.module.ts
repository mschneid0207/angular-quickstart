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
import {CustomerOverviewComponent} from "./customer-overview.component";

// PrimeNg
import {InputTextModule, DataTableModule, SharedModule, ToolbarModule, ButtonModule} from 'primeng/primeng';

// services
import {HeroService} from './hero.service';

// routing
import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {CustomerDetailComponent} from "./customer-detail.component";



@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,  AppRoutingModule, InputTextModule, DataTableModule, SharedModule, ToolbarModule, ButtonModule],
    declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, CustomerOverviewComponent, CustomerDetailComponent],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
