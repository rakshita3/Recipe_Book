import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();
   private recipes: Recipe[] =[
         new Recipe(
          'Burger',
          'It taste awesome',
         'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg',
          [
           new Ingredient('Buns',2),
           new Ingredient('Mayonese',1),
            new Ingredient('Tomatoes',1)
          
         ]),
          new Recipe(
             'noodles',
           'spicy yummy noodles',
            'https://www.subbuskitchen.com/wp-content/uploads/2014/01/Veg-Noodles-1300x867.jpg',
            [new Ingredient('Hakka noodles packet',1),
            new Ingredient('Capsicum',2),
           new Ingredient('Onions',2),
           new Ingredient('Cabbage',1)
          ])
     ];

    //private recipes:Recipe[]=[];
      constructor(private slService:ShoppingListService){}
      setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());

      }
      getRecipes(){
        return this.recipes.slice();
      }
      getRecipe(index:number){
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
         this.slService.addIngredients(ingredients);

      }
      addRecipe(recipe:Recipe){
         this.recipes.push(recipe);
         this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe ){
         this.recipes[index]=newRecipe;
         this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());

      }
}