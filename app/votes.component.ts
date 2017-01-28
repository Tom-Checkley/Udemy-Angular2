import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'votes',
  template: `
    <div class="holder">
      <i
        class="glyphicon glyphicon-menu-up"
        [class.voted]="myVote == 1"
        (click)="upVote()"
      ></i>
      <span>{{ votes + myVote }} </span>
      <i
        class="glyphicon glyphicon-menu-down"
        [class.voted]="myVote == -1"
        (click)="downVote()"
      ></i>
    </div>
  `,
  styles: [`
    .glyphicon {
      color: #ccc;
      font-size: 1.5em;
      cursor: pointer;
    }
    .holder {
      width: 20px;
      text-align: center;
      display: inline-block;
    }
    .voted {
      color: orange;
      font-size: 2em;
    }
  `]
})

export class VotesComponent {
  @Input() votes = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  upVote() {
    if (this.myVote == 1) {
      return;
    }
    this.myVote ++;
    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    if(this.myVote == -1) {
      return;
    }
    this.myVote --;
    this.vote.emit({ myVote: this.myVote });
  }

}
