import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  {path: 'home', component:MainComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '', component:MainComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
