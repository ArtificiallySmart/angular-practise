import { Ingredient } from "./ingredients";

export interface ShoppingList {
    id: number,
    name: string,
    listItems: Ingredient[]
}