import React from "react";
import "./WidgetContent.css";

function WidgetContent(props) {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>{props.question}</h5>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
