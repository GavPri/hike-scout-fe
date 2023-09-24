import React, { useState } from "react";
import css from "../../css/PostCreateEditForm.module.css";
import { Button } from "react-bootstrap";
import Asset from "../../Asset";
import fileupload from "../../../assets/fileupload.png";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const textFields = (
    <div>
      <Button variant="primary" onClick={() => {}}>
        Cancel
      </Button>
      <Button variant="primary" type="Submit">
        Cancel
      </Button>
    </div>
  );

  return (
    <div className={css.FormContainer}>
      <h1 className="text-center">Upload Your File</h1>
      <form>
        <label htmlFor="image">Image</label>
        <Asset src={fileupload} message="Click or tap to upload your Image" />
        <label htmlFor="title">Title</label>
        <input type="text" placeholder="Tilte" />
        <label htmlFor="content">Decribe Your Hike</label>
        <input type="textArea" placeholder="Describe Your Hike" />
        <div>{textFields}</div>
      </form>
    </div>
  );
}

export default PostCreateForm;
