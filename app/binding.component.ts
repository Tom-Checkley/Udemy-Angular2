import { Component } from '@angular/core';


@Component({
  selector: 'binding-buttons',
  template: `
    <input type="text" [(ngModel)]="title" />
    <input value="Clear" class="btn btn-primary" type="button" (click)="title = ''" />
    Preview: {{ title }}
  `
})

export class BindingComponent {
  title ='Angular App';
}
