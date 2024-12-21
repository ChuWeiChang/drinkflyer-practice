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
    {user:"Gwen B.", comment:"“I love the relaxed feeling and lack of a morning headache.”"},
    {user:"Melissa A.", comment:"“The best cocktail for my partner and I to take the edge off.”"},
    {user:"Matt K.", comment:"“The perfect blend of flavor and relaxation.”"},
    {user:"Megan K.", comment:"“Such a nice treat to wind down with after a long, hectic day.”"},
    {user:"Nesha K.", comment:"“I feel both relaxed and in control when sipping one.”"},
    {user:"Chelsea B.", comment:"“Refreshing and the perfect go-to for after work or out on the town.”"},
  ]
}
