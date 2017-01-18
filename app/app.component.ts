import { Component } from '@angular/core';
import { FavouriteComponent } from './favourite.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello Angular</h1>
    <courses></courses>
    <favourite [isFavourite]="post.isFavourite" (change)="onFavouriteChange($event)"></favourite>
    <authors></authors>
  `
})

export class AppComponent {
  post = {
    title: 'Title',
    isFavourite: true
  }

  onFavouriteChange($event) {
    console.log($event);
  }
}
