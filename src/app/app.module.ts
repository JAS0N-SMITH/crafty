import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeEntryComponent } from './components/recipe-entry/recipe-entry.component';
import { RecipeBrowserComponent } from './components/recipe-browser/recipe-browser.component';
import { DocumentationComponent } from './components/documentation/documentation.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProductService } from './services/productservice';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    RecipeEntryComponent,
    RecipeBrowserComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    TabMenuModule,
    MessageModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    FormsModule
  ],
  providers: [ProductService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
