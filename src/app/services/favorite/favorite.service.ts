import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  private favoriteRecipes: any[] = [];

  addFavoriteRecipe(recipe: any) {
    this.favoriteRecipes.push(recipe);
  }


  getFavoriteRecipes() {
    return this.favoriteRecipes;
  }

  removeFavoriteRecipe(recipeId: string) {
    this.favoriteRecipes = this.favoriteRecipes.filter(recipe => recipe.idMeal !== recipeId);
  }

  isRecipeInFavorites(recipeId: string): boolean {
    return this.favoriteRecipes.some(recipe => recipe.idMeal === recipeId);
  }

}
