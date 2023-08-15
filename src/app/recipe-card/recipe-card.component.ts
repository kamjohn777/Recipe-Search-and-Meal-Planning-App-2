import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from '../services/favorite/favorite.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  @Input() recipe: any;
  @Output() recipeClicked: EventEmitter<string> = new EventEmitter();
  
  constructor(private favoriteRecipeService: FavoriteService) {}

  onRecipeClick(): void {
    this.recipeClicked.emit(this.recipe.idMeal); 
  }

  onFavoriteClick(): void {
    this.favoriteRecipeService.addFavoriteRecipe(this.recipe); 
  }

  isRecipeInFavorites(recipeId: string): boolean {
    return this.favoriteRecipeService.isRecipeInFavorites(recipeId);
  }
}
