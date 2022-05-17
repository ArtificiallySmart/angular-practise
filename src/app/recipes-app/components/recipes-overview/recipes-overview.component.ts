import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../classes/recipe';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipes-overview',
  templateUrl: './recipes-overview.component.html',
  styleUrls: ['./recipes-overview.component.css']
})

export class RecipesOverviewComponent implements OnInit {

  faPlus = faPlus;

  constructor( private recipeServive: RecipeService) { }

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeServive.getRecipes().subscribe((recipes) => (this.recipes = recipes));
    }

}
