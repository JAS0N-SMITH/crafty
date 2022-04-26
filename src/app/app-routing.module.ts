import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeBrowserComponent } from './components/recipe-browser/recipe-browser.component';
import { RecipeEntryComponent } from './components/recipe-entry/recipe-entry.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe-entry', component: RecipeEntryComponent },
  { path: 'recipe-browser', component: RecipeBrowserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
