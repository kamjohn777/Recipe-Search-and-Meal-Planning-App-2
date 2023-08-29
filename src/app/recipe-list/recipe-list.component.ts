// import { Component, OnInit } from '@angular/core';
// import { RecipeService } from '../services/recipe/recipe.service';
// // import { MealService } from '../services/recipe/recipe.service';


// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements OnInit {
//   mealCategories: any[] =[];

//   constructor(public recipeService: RecipeService) {}

//   ngOnInit(): void {
//     this.recipeService.getMealCategories().subscribe((data: any) =>{
//       this.mealCategories = data.meals;
//     })
//   }
// }


// recipe-list.component.ts
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe/recipe.service';
import { Router } from '@angular/router';
import { FavoriteService } from '../services/favorite/favorite.service';
import { animationFrameScheduler } from 'rxjs';
import { animateChild } from '@angular/animations';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
  searchTerm: any = '';
  categories: any[] = [];
  selectedCategory :string ='';
  selectedRecipeId: any = '';
  filteredRecipes: any[] = [];
  displayedRecipes: any[] = [];
  pageSize: number = 10;
  favoriteRecipes: any[] = [];

  
  // @ViewChild('heart', { static: false }) heartRef!: ElementRef;
  // @ViewChild('heart') heartRef!: ElementRef;
  // @ViewChild('animationHeart', { static: false }) animationHeartRef!: ElementRef;

  @ViewChild('heart', { static: false }) heartRef!: ElementRef;
  @ViewChild('animationHeart', { static: false }) animationHeartRef!: ElementRef;


  constructor(private recipeService: RecipeService, private router: Router, private favoriteRecipeService: FavoriteService) {}
  fetchRecipesByCategory(): void {
    this.recipeService.getRecipesByCategory(this.selectedCategory).subscribe((data: any) => {
      this.recipes = data.meals;
    });
  }

  fetchCategories(): void {
    this.recipeService.getMealCategories().subscribe((data: any) => {
      this.categories = data.categories;
    });
  }



  fetchRecipesByCriteria(criteria: string): void {
    this.recipeService.getRecipesBySearch(criteria).subscribe((data: any) => {
      this.recipes = data.meals;
    });
  }

  onFavoriteClick(recipe: any): void {
    this.favoriteRecipeService.addFavoriteRecipe(recipe);
  }

  isRecipeInFavorites(recipeId: string): boolean {
    return this.favoriteRecipeService.isRecipeInFavorites(recipeId);
  }
  

  openRecipeDetails(recipeId: string): void {
    this.router.navigate(['/meal', recipeId]);
    // this.selectedRecipeId = recipeId;
  }
  
  onRecipeFavorite(recipe: any) {
    this.favoriteRecipeService.addFavoriteRecipe(recipe);
    
  }

  fetchRecipesBySearchTerm(): void {
    this.recipeService.getRecipesBySearch(this.searchTerm).subscribe((data: any) => {
      console.log(data)
      this.recipes = data.meals;
    });
  }

  performSearch() {
    this.fetchRecipesBySearchTerm();
  }
  

  

  ngOnInit(): void {
    // Fetch and display recipes based on some criteria (e.g., search term, category, etc.)
    // this.fetchRecipesByCriteria('beef'); // Example: Fetch recipes with 'chicken' as a search term
    this.fetchCategories();
    this.fetchRecipesBySearchTerm();
    // this.fetchRecipesBySearchTerm();
  }

  // const heart = document.querySelector(".heart");
  // const animationHeart = document.querySelector
  // (".animation-heart");

  // heart.addEventListener('click', () => {
    // animationHeart.classList.add('popup');
    // HeaderComponent.classList.add('fill-color');
  //   animationHeart.classList.add('animation');
  //   HeaderComponent.classList.add('fill-color');
  // })

  // animateHeart.addEventListener('click', () => {
  //   animateHeart.classList.remove
  //   ('animation');
  //   heart.classList.remove('fill-color');
  // })



// this is the typescript code
  ngAfterViewInit() {
    console.log(this.heartRef.nativeElement);
  }
  
  onHeartClick(): void {
    this.animationHeartRef.nativeElement.classList.add('animation');
    this.heartRef.nativeElement.classList.add('fill-color');
    console.log("click function:")
  }

  // onAnimationHeartClick(): void {
  //   this.animationHeartRef.nativeElement.classList.remove('animation');
  //   this.heartRef.nativeElement.classList.remove('fill-color');
  //   console.log("Animation for click:")
  // }



  onAnimationHeartClick(): void {
    if (this.animationHeartRef && this.animationHeartRef.nativeElement) {
        this.animationHeartRef.nativeElement.classList.remove('animation');
    }
    if (this.heartRef && this.heartRef.nativeElement) {
        this.heartRef.nativeElement.classList.remove('fill-color');
    }
    console.log("animation heart clicked:");
}

}




