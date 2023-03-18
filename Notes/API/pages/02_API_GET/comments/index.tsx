import React, { useState } from "react";
import { CommentType } from "@/data/comments";

const Comments = (): JSX.Element => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const fetchComment = async () => {
    // fetching json data from next api using GET request
    const res = await fetch("/api/02_API_GET/comments");
    const data: CommentType[] = await res.json();
    setComments(data);
  };
  return (
    <>
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
