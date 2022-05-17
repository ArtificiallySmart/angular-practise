import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../classes/recipe';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'applications/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'http://localhost:3000/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  addRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }

}
