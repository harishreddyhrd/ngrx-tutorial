import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addNewPostForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addNewPostForm = new FormGroup({
      newPostTitle: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      newPostDescription: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

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
  }
}
