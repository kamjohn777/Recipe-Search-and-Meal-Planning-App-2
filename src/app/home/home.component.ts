import { Component } from '@angular/core';
// import { RecipeService } from './path-to-recipe-service'; 
// import { Router } from '@angular/router';
// import { FavoriteService } from './path-to-favorite-service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // recipes: any[] = [];
  // searchTerm: any = '';
  // categories: any[] = [];
  // selectedCategory :string ='';
  // selectedRecipeId: any = '';
  // filteredRecipes: any[] = [];
  // displayedRecipes: any[] = [];
  // pageSize: number = 10;
  // favoriteRecipes: any[] = [];

  // constructor(private recipeService: RecipeService, private router: Router, private favoriteRecipeService: FavoriteService) {}
  // fetchRecipesByCategory(): void {
  //   this.recipeService.getRecipesByCategory(this.selectedCategory).subscribe((data: any) => {
  //     this.recipes = data.meals;
  //   });
  // }

  // constructor(
  //   private recipeService: RecipeService,
  //   private router: Router,
  //   private favoriteRecipeService: FavoriteService
  // ) {}

  // fetchCategories(): void {
  //   this.recipeService.getMealCategories().subscribe((data: any) => {
  //     this.categories = data.categories;
  //   });
  // }

  // fetchRecipesByCriteria(criteria: string): void {
  //   this.recipeService.getRecipesBySearch(criteria).subscribe((data: any) => {
  //     this.recipes = data.meals;
  //   });
  // }

  // onFavoriteClick(recipe: any): void {
  //   this.favoriteRecipeService.addFavoriteRecipe(recipe);
  // }

  // isRecipeInFavorites(recipeId: string): boolean {
  //   return this.favoriteRecipeService.isRecipeInFavorites(recipeId);
  // }
  
  // openRecipeDetails(recipeId: string): void {
  //   this.router.navigate(['/meal', recipeId]);
  // }
  
  // onRecipeFavorite(recipe: any) {
  //   this.favoriteRecipeService.addFavoriteRecipe(recipe);
    
  // }

  // fetchRecipesBySearchTerm(): void {
  //   this.recipeService.getRecipesBySearch(this.searchTerm).subscribe((data: any) => {
  //     console.log(data)
  //     this.recipes = data.meals;
  //   });
  // }

  // performSearch() {
  //   this.fetchRecipesBySearchTerm();
  // }
  
  // ngOnInit(): void {
  //   this.fetchCategories();
  //   this.fetchRecipesBySearchTerm();
  // }
}
