import { Component} from "@angular/core";
import { DataStorageSErvice } from "../shared/data-storage.service";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
 export class HeaderComponent{
   constructor(private dataStorageService : DataStorageSErvice){}


   onSaveData(){
    this.dataStorageService.storeRecipes();
   }
   onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
   }
   
}
