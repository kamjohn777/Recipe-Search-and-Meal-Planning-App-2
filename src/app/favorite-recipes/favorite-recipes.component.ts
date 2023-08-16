import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe/recipe.service';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { Router } from '@angular/router';
import { FavoriteService } from '../services/favorite/favorite.service';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent  {
  favoriteRecipes: any[] = [];

  constructor(private router: Router,  private favoriteService: FavoriteService) {
    // Retrieve favorite recipes from Recipe List Component
    this.favoriteRecipes = this.favoriteService.getFavoriteRecipes();
  }

  navigateToRecipeDetails(recipeId: string) {
    this.router.navigate(['/meal', recipeId]);
  }

  removeFromFavorites(recipeId: string): void {
    this.favoriteService.removeFavoriteRecipe(recipeId);
    this.favoriteRecipes = this.favoriteService.getFavoriteRecipes();
  }
}

