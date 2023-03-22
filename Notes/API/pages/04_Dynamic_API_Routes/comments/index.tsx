import React, { useState } from "react";
import { CommentType } from "@/data/comments";

const Comments = (): JSX.Element => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [inputComment, setInputComment] = useState("");
  const fetchComment = async () => {
    const res = await fetch("/api/03_API_POST/comments");
    const data: CommentType[] = await res.json();
    setComments(data);
  };

  const newComment = async () => {
    const res = await fetch("/api/03_API_POST/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: inputComment }),
    });
    const data: CommentType = await res.json();
    setComments([...comments, data]);
  };
  return (
    <>
      <div>
        <fieldset>
          <input
            type="text"
            placeholder="Enter comment"
            value={inputComment}
            onChange={(e) => {
              setInputComment(e.target.value);
            }}
            name="comment"
          />
          <input type="button" value="Comment" onClick={newComment} />
        </fieldset>
      </div>
      <button onClick={fetchComment}>Load Comments</button>
      {comments.map((value) => {
        return (
          <p key={value.id}>
            {value.id}) {value.text}
          </p>
        );
      })}
    </>
  );
};

export default Comments;
