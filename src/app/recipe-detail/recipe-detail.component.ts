import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe/recipe.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any; // Adjust the type if needed
  @Input() recipeId: string | undefined;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {}

 

  // Helper method to extract and format ingredients
  getIngredients(recipe: any): string[] {
    const ingredients: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe['strIngredient' + i];
      const measure = recipe['strMeasure' + i];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(`${measure} ${ingredient}`);
      } else {
        break; // No more ingredients
      }
    }

    return ingredients;
  }

  navigateToRecipes(): void {
    this.router.navigate(['/recipes']);
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.recipeService.getRecipeById(recipeId).subscribe(data => {
        this.recipe = data.meals[0];
      });
    });
  }
}