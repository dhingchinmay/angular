import { Ingredient } from './../shared/ingredient.model';
export class Recipe{

   public name: string;
   public description: string;
   public imgPath: string;
   public ingredients : Ingredient[];

   constructor(name: string, desc: string, imgpath: string , ingredients:Ingredient[] ){
     this.name = name;
     this.description = desc;
     this.imgPath  = imgpath;
    this.ingredients = ingredients;
   }

}
