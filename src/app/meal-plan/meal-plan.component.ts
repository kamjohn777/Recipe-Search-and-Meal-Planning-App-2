import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe/recipe.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css']
})
export class MealPlanComponent implements OnInit {
  daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  selectedDay: string = '';
  selectedRecipe: any = null;
  mealPlan: { [key: string]: any } = {};
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.fetchRecipes();
  }

  onDaySelect(day: string): void {
    this.selectedDay = day;
    console.log(this.selectedDay)
  }

  onRecipeSelect(recipe: any): void {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
  }

  fetchRecipes(): void{
    this.recipeService.getRecipes().subscribe((data: any) => {
      this.recipes = data.meals;
    })
  }

  assignRecipeToDay(): void {
    if (this.selectedDay && this.selectedRecipe) {
      this.mealPlan[this.selectedDay] = this.selectedRecipe;
      console.log(this.mealPlan)
      this.clearSelections();
    }
  }

  clearSelections(): void {
    this.selectedDay = '';
    this.selectedRecipe = null;
  }
}
