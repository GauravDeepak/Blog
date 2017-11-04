import { Injectable} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Post } from './post';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService {
    constructor(private http: Http) {
       
    }
    getPost() {
        return this.http.get('http://localhost:3001/api/posts')
        .map( res  => res.json());
    }
    addPost(newPost) {
        var headers = new Headers();
        headers.append('content-type','Application/json');
        return this.http.post('http://localhost:3001/api/post',newPost,{headers:headers})
        .map(res => res.json());
    }
    updateLike(id) {
        var headers = new Headers();
        headers.append('content-type','Application/json');
        return this.http.post('http://localhost:3001/api/update',id,{headers:headers})
        .map(res => res.json());
    }
}