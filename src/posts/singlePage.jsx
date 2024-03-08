import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UserAuthor } from "./UserAuthor";
import { ReactionsButtons } from "./ReactionsButtons";
import { selectPostById } from "../features/posts/postSlice";

export const SinglePage = () => {
  const postID = useParams().postid;
  
  const post = useSelector(state => selectPostById(state, postID));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <UserAuthor userId={post.user} />
        <ReactionsButtons posts={post} />
        <br />
        <Link to={`/editPost/${post.id}`}>Edit Post</Link>
      </article>
    </section>
  );
};
