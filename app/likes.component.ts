import { Component, Input } from '@angular/core';

@Component({
  selector: 'likes',
  template: `
    <i class="
      glyphicon glyphicon-thumbs-up"
      [class.highlighted]="iLike"
      (click)="onClick()"
      ></i>
    <span>{{ totalLikes }}</span>
  `,
  styles: [`
    .glyphicon-thumbs-up {
      color: #ccc;
      cursor: pointer;
    }

    .highlighted {
      color: blue;
    }
  `]
})

export class LikesComponent{

  @Input() totalLikes = 0;
  @Input() iLike = false;

  onClick() {
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }
}
