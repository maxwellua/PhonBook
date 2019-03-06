import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { AboutModule } from './about/about.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'add', component: CreateContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact/:id', component: ContactDetailsComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule,
    AboutModule,
    FormsModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
