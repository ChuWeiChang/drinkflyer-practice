import { Component } from '@angular/core';
import {UserCommentBlockComponent} from '../user-comment-block/user-comment-block.component';

@Component({
  selector: 'app-user-comments',
  imports: [
    UserCommentBlockComponent
  ],
  templateUrl: './user-comments.component.html',
  styleUrl: './user-comments.component.css'
})
export class UserCommentsComponent {
  commentBlocks = [
    {user:"Gwen A.", comment:"asssssssssssssssssssasssssssssssssasssssss"},
    {user:"Gwen B.", comment:"asssssssssssssssssssasssssssssssssasssssss"},
    {user:"Gwen C.", comment:"asssssssssssssssssssasssssssssssssasssssss"},
    {user:"Gwen D .", comment:"asssssssssssssssssssasssssssssssssasssssss"},
  ]
}
