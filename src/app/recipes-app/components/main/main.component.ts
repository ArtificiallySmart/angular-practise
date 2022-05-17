import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../classes/recipe';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  // addRecipe(recipe: Recipe): void {
  //   console.log(`main-component ${JSON.stringify(recipe)}`)
  //   this.recipeService.addRecipe(recipe).subscribe();
  // };

  ngOnInit(): void {
  }

}
