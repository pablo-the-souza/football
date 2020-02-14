import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule}  from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule}  from '@angular/material/expansion';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatButtonModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule, 
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
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
    MatExpansionModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule
  ]
})

export class MaterialModule {}