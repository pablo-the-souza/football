import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule}  from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule}  from '@angular/material/expansion';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    MatButtonModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule, 
    MatExpansionModule,
    NgbModule
  ],
  exports: 
  [
    MatButtonModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule
  ]
})

export class MaterialModule {}