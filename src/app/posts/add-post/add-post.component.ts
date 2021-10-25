import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { addNewPostAction } from 'src/app/store/posts-state/posts.actions';
import { postsSelector } from 'src/app/store/posts-state/posts.selectors';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addNewPostForm: FormGroup = new FormGroup({
    newPostTitle: new FormControl('POST-0X_TITLE', [
      Validators.required,
      Validators.minLength(6),
    ]),
    newPostDescription: new FormControl('POST-0X_DESCRIPTION', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {}

  showErrorsForTitle() {
    const titlePlaceholder = this.addNewPostForm.get('newPostTitle');
    if (titlePlaceholder?.touched && !titlePlaceholder.valid) {
      if (titlePlaceholder.errors.required) {
        return 'Title is required';
      } else if (titlePlaceholder.errors.minlength) {
        return 'Titlte must be atleast 6 characters';
      }
    }
  }

  showErrorsForDescription() {
    const descriptionPlaceholder =
      this.addNewPostForm.get('newPostDescription');
    if (descriptionPlaceholder?.touched && !descriptionPlaceholder.valid) {
      if (descriptionPlaceholder.errors.required) {
        return 'Description is required';
      } else if (descriptionPlaceholder.errors.minlength) {
        return 'Description must be atleast 10 characters';
      }
    }
  }

  onSubmit() {
    if (!this.addNewPostForm.valid) {
      return;
    }
    console.log(this.addNewPostForm.value);

    //Define newPost ID
    let newPostId: number;
    this._store.select(postsSelector).subscribe((incomingValue) => {
      newPostId = incomingValue.length + 1;
    });

    //Define the newPost to be added
    const newPost: Post = {
      id: newPostId,
      title: this.addNewPostForm.value.newPostTitle,
      description: this.addNewPostForm.value.newPostDescription,
    };

    //add the new Post
    this._store.dispatch(addNewPostAction({ newPost }));
  }
}
