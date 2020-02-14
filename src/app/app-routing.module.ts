import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { TournamentComponent } from './tournament/tournament.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'city', component: CityComponent },
  { path: 'club', component: ClubComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path: 'tournament', component: TournamentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
