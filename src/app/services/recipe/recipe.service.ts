// meal.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipeService {
//   private apiUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

//   constructor(private http: HttpClient) {}

//   getMealCategories(): Observable<any> {
//     return this.http.get(this.apiUrl);
//   }

//   getImageUrl(imagePath: string): string {
//     return `www.themealdb.com/images//media/meals/llcbn01574260722.jpg/preview`;
//   }
// }

// recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = 1; // API key
  private apiUrl = `https://www.themealdb.com/api/json/v1/${this.apiKey}`;

  constructor(private http: HttpClient) {}

  // Fetch a list of recipes based on search criteria 
  getRecipesBySearch(query: string): Observable<any> {
    const url = `${this.apiUrl}/search.php?s=${query}`;
    return this.http.get(url);
  }

  // Fetch a single recipe by its ID
  getRecipeById(id: string): Observable<any> {
    const url = `${this.apiUrl}/lookup.php?i=${id}`;
    return this.http.get(url);
  }

  // Fetch a random recipe
  getRandomRecipe(): Observable<any> {
    const url = `${this.apiUrl}/random.php`;
    return this.http.get(url);
  }

    // Fetch meal categories
    getMealCategories(): Observable<any> {
      const url = `${this.apiUrl}/categories.php`;
      return this.http.get(url);
    }

      // Fetch recipes by category
  getRecipesByCategory(category: string): Observable<any> {
    const url = `${this.apiUrl}/filter.php?c=${category}`;
    return this.http.get(url);
  }

  // Fetch a list of recipes
  getRecipes(): Observable<any> {
    const url = `${this.apiUrl}/search.php?s=`;
    return this.http.get(url);
  }

}
