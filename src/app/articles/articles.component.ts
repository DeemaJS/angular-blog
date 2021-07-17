import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  blogs: ScullyRoute[] = [];
  private routeSub: Subscription | undefined;

  constructor(private scullyService: ScullyRoutesService) {}

  ngOnInit(): void {
    this.scullyService.available$.subscribe(blogs => {
      this.blogs = blogs.filter(blog => blog.title);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

}
