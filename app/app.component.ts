import { Component }          from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>Hello Angular</h1>
    <accordian title="Courses">
      <binding-buttons></binding-buttons>
      <courses></courses>
    </accordian>
    <accordian title="Authors">
      <authors></authors>
    </accordian>

    <div class="col-md-4">
      <switch></switch>
      <div style="display: flex; justify-content: space-around; align-items: center;">
        <likes
          [totalLikes]="tweet.totalLikes"
          [iLike]="tweet.iLike" >
        </likes>
        <favourite
          [isFavourite]="post.isFavourite"
          (change)="onFavouriteChange($event)">
        </favourite>
        <votes
          [votes]="post.votes"
          [myVote]="post.myVote"
          (vote)="onVote($event)"
        ></votes>
      </div>
    </div>

  `
})

export class AppComponent {
  post = {
    title: 'Title',
    isFavourite: true,

    votes: 10,
    myVote: 0,
  };

  onVote($event) {
    console.log($event);
  }

  tweet = {
    totalLikes: 9,
    iLike: false
  }

  onFavouriteChange($event) {
    console.log($event);
  }
}
