import { useDispatch } from "react-redux";
import { reactionAdded } from "../features/posts/postSlice";

const reactionEmoji = {
  shit: "💩",
  robot: "🤖",
  monkey: "🙈",
  chill: "😎",
  heart: "❤",
};

export const ReactionsButtons = ({ posts }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        onClick={() =>
          dispatch(reactionAdded({ postId: posts.id, reaction: name }))
        }
        key={name}
        type="button"
        className="reaction-button"
      >
        {emoji} {posts.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
