import { Component, OnInit } from '@angular/core';
import { Post } from '../services/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-loveblog',
  templateUrl: './loveblog.component.html',
  styleUrls: ['./loveblog.component.css'],
  providers:[PostService]
})
export class LoveblogComponent implements OnInit {
  posts : Post[];
  post:Post;
  name:string;
  content:string;
  like:number;
  unlike:number;
  date:Date
  constructor(private postService: PostService) { }

  ngOnInit() {
     this.postService.getPost()
    .subscribe(posts =>
    this.posts = posts
  )
  }
  UpdatePost(id){
    this.postService.updateLike(id)
    .subscribe(posts => {

    })
  }
}
