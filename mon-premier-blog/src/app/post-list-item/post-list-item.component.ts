import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit() {
  }

  onLoveIt(loveIt: boolean): void {
    if (loveIt) {
      this.post.loveIts++;
    } else {
      this.post.loveIts--;
    }
    this.postsService.updatePost(this.post);
  }

  onDeletePost() {
    this.postsService.removePost(this.post);
  }

  onViewPost() {
    this.router.navigate(['/posts', 'view', this.post.id]);
  }
}
