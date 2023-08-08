import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    MealPlanComponent,
    ShoppingListComponent,
    FavoriteRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add AppRouting to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
