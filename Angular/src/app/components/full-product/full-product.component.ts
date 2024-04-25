import {ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {tap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";
import {CommentData, ShopService, Wine} from "../../services/shop.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";
import {fadeInOut} from "../fade";


@Component({
  selector: 'app-full-product',
  templateUrl: './full-product.component.html',
  styleUrl: './full-product.component.css',
  animations:[fadeInOut]
})
export class FullProductComponent implements OnInit{

  isBrowser:boolean=false;
  comments:CommentData[]=[];
  warning:string="assets/img/warning.png"
  wine!:Wine;
  count:number=0;
  rating:number=0;
  currentRating:number=0;
  countComments:string='';
  commentForm: FormGroup= new FormGroup({
      name: new FormControl(''),
      text: new FormControl(''),
      value: new FormControl(0),
      likes: new FormControl(0),
      reports: new FormControl(0)
    });

  basketForm:FormGroup= new FormGroup(
    {
      count: new FormControl()
    }
  );
  ngOnInit() {

// Получаем все вина один раз при инициализации.
  this.shopService.getWines().subscribe({
    next: (wines: Wine[]) => {
      this.route.params.subscribe(params => {
        const id = +params['id'];

        if (id !== null && !isNaN(id)) {
          const wineById = wines.find(wine => wine.id === id);
          if (wineById) {
            this.wine = wineById;
             this.loadComments(this.wine.id);
              setTimeout(() => {

    }, 100);
          } else {
            this.router.navigate(['/shop']);
          }
        }
      });
    },
    error: (error) => {
      console.error('Failed to load wines', error);
      this.router.navigate(['/shop']);
    }
  });
   this.route.params.subscribe(params => {
    if (params['id'] === undefined) {
      this.shopService.currentWine.subscribe(wineData => {
        if (wineData) {
          this.wine = wineData;
           this.loadComments(this.wine.id);

        } else {
          this.router.navigate(['/shop']);
        }
      });
    }
  });




}

get countComment()
{
  return this.comments.length+" відгуки";
}
get avgRating(): number {
  let sum: number = 0;
  this.comments.forEach(item => (sum += item.value));

  if (this.comments.length === 0) {

    this.currentRating = 0;
    return 0;
  }

  this.currentRating = sum / this.comments.length;
  return this.currentRating;
}
loadComments(wineId: number): void {
    this.shopService.getCommentsByWineId(wineId).subscribe({
      next: (comments) => {
        this.comments = comments;
        this.updateRatings(); // update ratings when comments are loaded/changed
      },
      error: (error) => console.error('Error fetching comments', error)
    });
  }
updateRatings() {
    let sum = this.comments.reduce((acc, comment) => acc + comment.value, 0);
    let average = this.comments.length ? sum / this.comments.length : 0;
    this.currentRating = parseFloat(average.toFixed(1)); // Округляем до десятых
}

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private cdr: ChangeDetectorRef,private router: Router, public shopService:ShopService, private route: ActivatedRoute) {
   this.isBrowser = isPlatformBrowser(this.platformId);
  }

  pluse()
  {
    this.count++;

  }
minus() {
  if (this.count > 0) {
    this.count--;

  }
}
add() {
  if (this.wine.count > 0) {
    for (let item of this.shopService.basket) {
      if (item.wine.name === this.wine.name) {

        const currentCount = Number(this.count);
        const itemCount = Number(item.count);

        if ((currentCount + itemCount) > 1000) {
          return;
        }

        item.count = currentCount + itemCount;
        return;
      }
    }

    this.shopService.basket.push({ wine: this.wine, count: Number(this.count) });
  }

  this.cdr.detectChanges();
}


send() {

  if (this.commentForm.valid) {
    const newComment = {
      wine: this.wine.id,
      value:this.rating,
      name:this.commentForm.get('name')?.value,
      text:this.commentForm.get('text')?.value,
      likes:this.commentForm.get('likes')?.value,
      reports:this.commentForm.get('reports')?.value
    };
    this.shopService.addComment(newComment).subscribe({
      next: (comment) =>  {this.comments.push(comment);
           this.commentForm.reset();
           this.rating=0;
           this.updateRatings()} ,
      error: (error) => console.error('Error adding comment', error)
    });
  }

}


}
