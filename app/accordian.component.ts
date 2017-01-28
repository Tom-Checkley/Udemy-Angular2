import { Component, Input } from '@angular/core';

@Component({
  selector: 'accordian',
  template: `
    <div class="accordian panel panel-default">
      <div class="accordian-title panel-heading" (click)="toggle()">
        <strong>{{ title }}</strong>
        <i
          class="pull-right glyphicon"
          [ngClass]="{
            'glyphicon-chevron-down': !isExpanded,
            'glyphicon-chevron-up': isExpanded
          }"
        ></i>
      </div>
      <div *ngIf="isExpanded" class="accordian-content panel-body">
        <ng-content></ng-content>
      </div>
    </div>
  `
})

export class AccordianComponent {
  isExpanded = false;
  @Input() title: string;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
