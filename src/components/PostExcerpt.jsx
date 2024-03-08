import { UserAuthor } from "../posts/UserAuthor";
import { TimeAgo } from "../features/posts/TimeAgo";
import { Link } from "react-router-dom";
import { ReactionsButtons } from "../posts/ReactionsButtons";

export const PostExcerpt = ({ post }) => {
	return (
		<article className="post-excerpt">
        <h3>{post.title}</h3>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <div>
          <UserAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <br />
        <ReactionsButtons posts={post} />
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
	);
  };