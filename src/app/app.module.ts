import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { CityComponent } from './city/city.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { TournamentComponent } from './tournament/tournament.component';


//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule}  from '@angular/flex-layout';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeComponent } from './tournament/welcome/welcome.component';
import { TabelaComponent } from './tournament/tabela/tabela.component';
import { ContatoComponent } from './tournament/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    CityComponent,
    FooterComponent,
    ClubComponent,
    ContactComponent,
    TestComponent,
    TournamentComponent,
    WelcomeComponent,
    TabelaComponent,
    ContatoComponent, 
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FontAwesomeModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
