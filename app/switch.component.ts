import { Component } from '@angular/core';

@Component({
  selector: 'switch',
  template: `
    <div [ngSwitch]="viewMode">
      <ul class="nav nav-pills">
        <li [class.active]="viewMode == 'map'">
          <a (click)="viewMode = 'map'">Map View</a>
        </li>
        <li [class.active]="viewMode == 'list'">
          <a (click)="viewMode = 'list'">List View</a>
        </li>
      </ul>

      <ng-container *ngSwitchCase="'map'">
        <p>Map View Content</p>
        <img src="http://lorempixel.com/400/200" />
      </ng-container>
      <ng-container *ngSwitchCase="'list'">
        <p>List View Content</p>
        <img src="http://lorempixel.com/400/200" />
      </ng-container>
    </div>
  `
})

export class SwitchComponent {
  viewMode = 'map';
}
