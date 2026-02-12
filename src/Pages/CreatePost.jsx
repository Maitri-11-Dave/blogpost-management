import React from "react";
import {
  FaCloudUploadAlt,
  FaHeading,
  FaLink,
  FaRegPaperPlane,
  FaTimes,
} from "react-icons/fa";

const CreatePost = () => {
  return (
    <div className="create-post-page">
      <navbar />

      <div className="create-post-container">
        <header className="form-header">
          <h1>Create New Post</h1>
          <P>Share your thoughts and stories with the world</P>
        </header>

        <div className="post-form-card">
          <form>
            <div className="form-group">
              <lable>Post Title</lable>
              <div className="input-wrapper">
                <FaHeading className="input-icon" />
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enter your Catchy title"
                />
              </div>
            </div>

            <div classname="form-group">
              <lable>Author Name</lable>
              <div className="input-wrapper">
                <FaHeading className="input-icon" />
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  placeholder="Enter your Name..."
                />
              </div>
            </div>

            <div className="form-group">
              <lable>Description</lable>
              <textarea
                name="description"
                className="form-control"
                placeholder="what's on your mind?write your story hear"
              ></textarea>
            </div>

            <div className="form-group">
              <lable>Cover Image</lable>
              <div className="image-source-tabs">
                <button type="button" className="tab-btn active">
                  Image URL
                </button>

                <button type="button" className="tab-btn">
                  Uplaod Files
                </button>
              </div>

              <div className="input-wrapper">
                <FaLink className="input-icon" />
                <input
                  type="url"
                  name="imageUrl"
                  className="form-control"
                  placeholder="Paste image URL hear (e.g http://...)"
                />

                <div classsName="image-uplaod-area">
                  <FaCloudUploadAlt className="upload-icon" />
                  <p>Click to Upload image from your device</p>
                </div>

                <div className="image-preview-container">
                  <img src="" alt="preview" className="image-preview" />
                  <button type="button" className="remove-image-btn">
                    <FaTimes />
                  </button>
                </div>
              </div>

              <div className="form-action-row">
                <button type="submit" className="submit-btn">
                  <FaRegPaperPlane />
                  Publish Post
                </button>

                <div type="button" className="cancle-btn">
                  Clear Form
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
