import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { DataStorageSErvice } from "src/app/shared/data-storage.service";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
constructor(private dataStorageService:DataStorageSErvice,private recipeService:RecipeService){}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes=this.recipeService.getRecipes();

    if(recipes.length === 0){

    
    return this.dataStorageService.fetchRecipes();}
    else{
        return recipes;
    }
}
}