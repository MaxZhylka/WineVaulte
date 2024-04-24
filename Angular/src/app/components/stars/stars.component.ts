import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();
  @Input() editable = true;
  stars: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if ('rating' in changes) {
      this.fillStars();
    }
  }

  fillStars() {
    this.stars = Array(5).fill(0).map((_, index) => index + 1);
  }

  selectRating(rating: number) {
    if (this.editable) {
      this.rating = rating;
      this.ratingChange.emit(this.rating);
    }
  }

  isClickable(): boolean {
    return this.editable;
  }
}
