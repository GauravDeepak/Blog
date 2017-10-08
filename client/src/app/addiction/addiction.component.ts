import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../services/post';

@Component({
  selector: 'app-addiction',
  templateUrl: './addiction.component.html',
  styleUrls: ['./addiction.component.css'],
  providers:[PostService]
})
export class AddictionComponent implements OnInit {
  posts:Post[];
  post:Post;
  name:string;
  content:string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    
  }
  addPost(){
   const post = {
     name:this.name,
     content:this.content
   }
   this.postService.addPost(post)
   .subscribe(post =>{

   })
   console.log("name "+this.name)
   this.name=null;
   this.content=null;
  
  }
  


}
