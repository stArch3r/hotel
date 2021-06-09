import { Component, OnInit } from '@angular/core';
import{ Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
ricipes: Recipe[] = [
  new Recipe ('A test Recipe', 'this simply a test ','https://c.pxhere.com/photos/64/4b/cooking_cuisine_culinary_delicious_dinner_dish_epicure_food-1514179.jpg!d')
];
  constructor() { }

  ngOnInit(): void {
  }

}
