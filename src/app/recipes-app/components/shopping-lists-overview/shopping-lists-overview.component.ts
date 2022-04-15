import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../interfaces/shopping-list';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-lists-overview',
  templateUrl: './shopping-lists-overview.component.html',
  styleUrls: ['./shopping-lists-overview.component.css']
})
export class ShoppingListsOverviewComponent implements OnInit {

  shoppingLists: ShoppingList[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.getShoppingLists();
  }

  getShoppingLists(): void {
    this.shoppingListService.getShoppingLists().subscribe((shoppingLists)=> (this.shoppingLists = shoppingLists));
  }

}
