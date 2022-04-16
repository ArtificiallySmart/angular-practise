import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../classes/recipe';
import { Ingredient } from '../../interfaces/ingredients';

import { FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.css']
})
export class RecipeCreatorComponent implements OnInit {
@Output() onAddRecipe: EventEmitter<Recipe> = new EventEmitter;
productForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
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
    // let id = this.productForm.value.id;
    let name = this.productForm.value.name;
    let ingredients = this.productForm.value.ingredients;
    const newRecipe = new Recipe(name, ingredients);
    console.log(`recipeCreator ${JSON.stringify(newRecipe)}`)
    this.onAddRecipe.emit(newRecipe);
  }  

  ngOnInit(): void {
    this.ingredients().push(this.newIngredient());
  }

}
