import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}   from './dashboard.component';
import {HeroesComponent}      from './heroes.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {CustomerOverviewComponent} from "./customer-overview.component";
import {CustomerDetailComponent} from "./customer-detail.component";
import {DirectiveTestComponent} from "./directive-test.component";
const routes: Routes = [
    {path: '', redirectTo: '/customer-overview', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'customer-overview', component: CustomerOverviewComponent},
    {path: 'customer-detail', component: CustomerDetailComponent},
    {path: 'directive-test', component: DirectiveTestComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
