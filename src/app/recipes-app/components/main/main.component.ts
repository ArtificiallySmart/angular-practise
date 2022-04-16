import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../classes/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  addRecipe(recipe: Recipe): void {
    console.log(`main-component ${JSON.stringify(recipe)}`)
    this.recipeService.addRecipe(recipe).subscribe();
  };

  ngOnInit(): void {
  }

}
