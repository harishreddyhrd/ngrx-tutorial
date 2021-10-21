import { Post } from 'src/app/models/post.model';

export interface PostsState {
  postsList: Post[];
}

export const initialPostsState: PostsState = {
  postsList: [
    { id: 1, title: 'POST-01_TITLE', description: 'POST-01_DESCRIPTION' },
    { id: 2, title: 'POST-02_TITLE', description: 'POST-02_DESCRIPTION' },
    { id: 3, title: 'POST-03_TITLE', description: 'POST-03_DESCRIPTION' },
  ],
};
