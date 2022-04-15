import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingList } from '../interfaces/shopping-list';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'applications/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/shopping-lists'

  constructor(private http: HttpClient) { }

  getShoppingLists(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(this.apiUrl);
  }

}
