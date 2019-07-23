import React from "react";
import "./ImageBlock.css";

const ImageBlock = props => (
  <img
    className={
      "col-md-2 col-sm-2 col-xs-16 pb-4 imageBlock rounded-corners " +
      (props.gameStatus === "2"
        ? " gameLost"
        : props.gameStatus === "1"
        ? " gameWon"
        : "")
    }
    src={process.env.PUBLIC_URL + "/images/" + props.imageFileName}
    alt={props.alt}
    height={props.imageBlockHeight}
    width={props.imageBlockWidth}
    onClick={props.clickHandler}
  />
);

export default ImageBlock;
