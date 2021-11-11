import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/model/comment';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  @Input() user : User;

  star :number;
  author:string;
  body:string;
  AddComment:Comment={
    stars:0,
    author:'',
    body:''
  }
  newCommentAdded(){
    this.AddComment.stars=this.star;
    this.AddComment.author=this.author;
    this.AddComment.body=this.body;
    this.user.comments.push(this.AddComment);
  }
  tab = 1;
}
