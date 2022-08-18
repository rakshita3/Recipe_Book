import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs";
@Injectable({providedIn:'root'})
export class DataStorageSErvice{
    constructor(private http:HttpClient,private recipeService:RecipeService){}

storeRecipes(){
   const recipes=this.recipeService.getRecipes();
   return this.http.put('https://ng-recipe-f28ad-default-rtdb.firebaseio.com/recipes.json',recipes)
   .subscribe(response=> {
    console.log(response);
   });
}
fetchRecipes(){
   return this.http.get<Recipe[]>('https://ng-recipe-f28ad-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(recipes=>{
        return recipes.map(recipes=>{
            return{...recipes,ingredients: recipes.ingredients ? recipes.ingredients:[] };

        });
    }),
    tap(recipes=>{
    this.recipeService.setRecipes(recipes);
})

    
    )
    
}
}

