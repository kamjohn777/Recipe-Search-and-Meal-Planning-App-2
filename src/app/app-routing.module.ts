import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';



const routes: Routes = [
  {path:'',component: HomeComponent}, //Default router
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipe/:id', component: RecipeDetailComponent},
  {path: 'mealplan',component: MealPlanComponent},
  {path: 'favorites', component: FavoriteRecipesComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
