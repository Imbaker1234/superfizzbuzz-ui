import { NgModule } from '@angular/core';

import {
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatSlideToggleModule, MatProgressBarModule, MatSnackBarModule
} from '@angular/material';

const materials = [
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatSnackBarModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class NgmatModule { }
