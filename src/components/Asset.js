import React from "react";
import { Spinner } from "react-bootstrap";
import css from "./css/Asset.module.css";

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={css.Asset}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
