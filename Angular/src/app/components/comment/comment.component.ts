import {Component, Input, input} from '@angular/core';
import {CommentData} from "../../services/shop.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
 @Input() comment!:CommentData;
 userIcon:string="assets/img/userIcon.png";
 like:string="assets/img/like.png";
 report:string="assets/img/report.png";
}
