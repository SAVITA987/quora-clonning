import React, { useEffect, useState } from "react";
import "./Widget.css";
import db from "../firebase";
import WidgetContent from "./WidgetContent";

function Widget() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Questions</h5>
      </div>
      <div className="widget__contents">
        {posts.map(({ id, questions }) => (
          <WidgetContent
            key={id}
            question={questions.question}
            users={questions.user}
          />
        ))}
      </div>
    </div>
  );
}

export default Widget;
