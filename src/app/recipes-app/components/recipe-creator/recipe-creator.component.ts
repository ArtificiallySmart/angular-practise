import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../classes/recipe';
import { Ingredient } from '../../interfaces/ingredients';
import { RecipeService } from '../../services/recipe.service';
import { FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.css']
})
export class RecipeCreatorComponent implements OnInit {
@Output() onAddRecipe: EventEmitter<Recipe> = new EventEmitter;
productForm: FormGroup;  
     
  constructor(private fb:FormBuilder, private recipeService: RecipeService, private route: Router) {  
     
    this.productForm = this.fb.group({ 
      name: '',  
      ingredients: this.fb.array([]) ,  
    });  
  }  
    
  ingredients() : FormArray {  
    return this.productForm.get("ingredients") as FormArray  
  }  
     
  newIngredient(): FormGroup {  
    return this.fb.group({  
      name: '',  
      amount: '',
      unit: ''  
    })  
  }  
     
  addIngredient() {  
    this.ingredients().push(this.newIngredient());  
  }  
     
  removeIngredient(i:number) {  
    this.ingredients().removeAt(i);  
  }  
     
  onSubmit() {
    let name = this.productForm.value.name;
    let ingredients = this.productForm.value.ingredients;
    const newRecipe = new Recipe(name, ingredients);
    console.log(`recipeCreator ${JSON.stringify(newRecipe)}`)
    this.recipeService.addRecipe(newRecipe).subscribe();
    this.route.navigate(['/recipes']);
    
  }  

  ngOnInit(): void {
    this.ingredients().push(this.newIngredient());
  }

}
