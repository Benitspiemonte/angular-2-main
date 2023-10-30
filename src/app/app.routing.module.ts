import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'home/:id' , component: HomeComponent },
  { path: 'detail/:id' , component: DetailComponentComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }