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

import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ConfirmationService } from 'primeng/api';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { SettingsComponent } from './components/settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    RecipeEntryComponent,
    RecipeBrowserComponent,
    DocumentationComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    TabMenuModule,
    MessageModule,
    CardModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
