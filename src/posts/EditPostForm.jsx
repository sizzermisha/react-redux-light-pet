import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdated, selectPostById } from "../features/posts/postSlice";

export const EditPostForm = () => {
  const postID = useParams().editpost;

  const post = useSelector(state => selectPostById(state, postID));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postID, title, content }));
      navigate(`/posts/${postID}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="Input new text/value title"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          placeholder="Input new text/value content"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClick}>
        Save Post
      </button>
    </section>
  );
};
