import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../recipes-app/components/main/main.component';
import { RecipeCreatorComponent } from '../recipes-app/components/recipe-creator/recipe-creator.component';
import { RecipesOverviewComponent } from '../recipes-app/components/recipes-overview/recipes-overview.component';
import { ShoppingListsOverviewComponent } from '../recipes-app/components/shopping-lists-overview/shopping-lists-overview.component';

const routes: Routes = [
{ path: '', component: MainComponent},
{ path: 'shoppinglist', component: ShoppingListsOverviewComponent},
{ path: 'recipes', component: RecipesOverviewComponent},
{ path: 'recipes/new', component: RecipeCreatorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
