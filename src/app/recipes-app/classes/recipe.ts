import { Ingredient } from "../interfaces/ingredients";

export class Recipe {
    public id!: number;
    constructor(
        public name: string,
        public ingredients: Ingredient[]
    ) {}
}
