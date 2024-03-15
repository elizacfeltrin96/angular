import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test', 'https://www.themediterraneandish.com/wp-content/uploads/2023/04/Fried-Arancini-recipe-15.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://www.eatingwell.com/thmb/IOTyjJAcVQ9uR7qG3EcJX7q2AHM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/creamy-garlic-skillet-chicken-with-spinach-7fb96b8ced6b4075b61b01d5d308f73b.jpg')
  ]; // array de componentes do tipo Recipe

}
