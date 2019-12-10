import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule, MatSortModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {DataNewComponent} from './components/data-new/data-new.component';
import {RouterModule, Routes} from '@angular/router';
import {DataService} from './data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'new', component: DataNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataNewComponent,
    DataNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatSortModule,
  ],
  providers: [MatDatepickerModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
