import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-comment-block',
  imports: [],
  templateUrl: './user-comment-block.component.html',
  styleUrl: './user-comment-block.component.css'
})
export class UserCommentBlockComponent {
  @Input() comment!: string;
  @Input() user !: string;
}
