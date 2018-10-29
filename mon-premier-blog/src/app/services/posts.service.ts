import { Injectable } from '@angular/core';
import { Post } from '../post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post [] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

 getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    // set post id
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  updatePost(post: Post) {
    const postIndexToUpdate = this.posts.findIndex(element => {
      if (element.id === post.id) {
        return true;
      }
    });
    if (postIndexToUpdate >= 0) {
      this.posts[postIndexToUpdate] = post;
    }
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {

    const postIndexToRemove = this.posts.findIndex(element => {
      if (element.id === post.id) {
        return true;
      }
    });
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

}
