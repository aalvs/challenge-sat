import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './layout/header/header.component';
import { IMaskModule } from 'angular-imask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { FormResourceService } from './shared/services/form-resource.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule
  ],
  providers: [ FormResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
