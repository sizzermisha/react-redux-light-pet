import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postSlice";
import { fetchPosts } from "../features/posts/postSlice";
import { useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { PostExcerpt } from "../components/PostExcerpt";

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  switch (postStatus) {
    case "loading": {
      return (content = <Spinner text="Loading..." />);
    }
    case "succeeded": {
      const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

		return content = orderedPosts.map((post) => {
			return (
			  <PostExcerpt key={post.id} post={post} />
		)});
    }
	case 'failed': {
		content = <div>{error}</div>
	}
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
