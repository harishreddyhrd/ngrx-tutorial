import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { updateExistingPostAction } from 'src/app/store/posts-state/posts.actions';
import { postSelectorByID } from 'src/app/store/posts-state/posts.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  selectedPost: Post;
  editExistingPostForm: FormGroup;
  selectedPostSubscription: Subscription;
  constructor(
    private _route: ActivatedRoute,
    private _store: Store<AppState>,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      // console.log(params);
      const selectedPostId: number = +params.get('id');
      this.selectedPostSubscription = this._store
        .select(postSelectorByID(selectedPostId))
        .subscribe((selection) => {
          this.selectedPost = selection;
          this.fillTheForm();
        });
    });
  }

  fillTheForm() {
    this.editExistingPostForm = new FormGroup({
      editPostTitle: new FormControl(this.selectedPost.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      editPostDescription: new FormControl(this.selectedPost.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onUpdate() {
    if (!this.editExistingPostForm.valid) {
      return;
    }
    console.log(this.editExistingPostForm.value);

    const editedPostTitle = this.editExistingPostForm.value.editPostTitle;
    const editedPostDescription =
      this.editExistingPostForm.value.editPostDescription;

    const editedPost: Post = {
      id: this.selectedPost.id,
      title: editedPostTitle,
      description: editedPostDescription,
    };

    this._store.dispatch(updateExistingPostAction({ editedPost }));
    this._router.navigate(['posts']);
  }

  showErrorsForTitle() {
    const titlePlaceholder = this.editExistingPostForm.get('editPostTitle');
    if (titlePlaceholder?.touched && !titlePlaceholder.valid) {
      if (titlePlaceholder.errors.required) {
        return 'Title is required';
      } else if (titlePlaceholder.errors.minlength) {
        return 'Titlte must be atleast 6 characters';
      }
    }
  }

  showErrorsForDescription() {
    const descriptionPlaceholder = this.editExistingPostForm.get(
      'editPostDescription'
    );
    if (descriptionPlaceholder?.touched && !descriptionPlaceholder.valid) {
      if (descriptionPlaceholder.errors.required) {
        return 'Description is required';
      } else if (descriptionPlaceholder.errors.minlength) {
        return 'Description must be atleast 10 characters';
      }
    }
  }

  ngOnDestroy() {
    if (this.selectedPostSubscription) {
      this.selectedPostSubscription.unsubscribe();
    }
  }
}
