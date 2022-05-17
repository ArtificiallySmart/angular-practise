import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './recipes-app/components/main/main.component';
import { ShoppingListsOverviewComponent } from './recipes-app/components/shopping-lists-overview/shopping-lists-overview.component';
import { ShoppingListComponent } from './recipes-app/components/shopping-list/shopping-list.component';
import { RecipesOverviewComponent } from './recipes-app/components/recipes-overview/recipes-overview.component';
import { RecipeComponent } from './recipes-app/components/recipe/recipe.component';
import { RecipeCreatorComponent } from './recipes-app/components/recipe-creator/recipe-creator.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShoppingListsOverviewComponent,
    ShoppingListComponent,
    RecipesOverviewComponent,
    RecipeComponent,
    RecipeCreatorComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
