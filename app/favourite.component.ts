import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'favourite',
  template: `
    <i
      class="glyphicon"
      [class.glyphicon-star-empty]="!isFavourite"
      [class.glyphicon-star]="isFavourite"
      (click)="onClick()">
    </i>
  `,
  styles: [`
    .glyphicon {
      cursor: pointer;
    }

    .glyphicon-star-empty {
      color: #ccc;
    }

    .glyphicon-star {
      color: orange;
    }
  `]
})
export class FavouriteComponent {
  @Input() isFavourite = false;

  @Output() change = new EventEmitter();

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue: this.isFavourite });
  }


}
