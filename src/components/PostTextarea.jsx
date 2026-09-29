function PostTextarea({
  post,
  onPostChange,
  characterCount,
  maxLength,
  isExceeded,
  platform,
}) {
  return (
    <div className="field">

      <div className="field-heading">
        <label>Write your content</label>

        <span className="live-label">
          ● LIVE
        </span>
      </div>

      <div
        className={`textarea-container ${
          isExceeded ? "textarea-error" : ""
        }`}
      >

        <textarea
          value={post}
          onChange={onPostChange}
          placeholder={
            platform === "twitter"
              ? "What's happening?"
              : "Share an idea, achievement, insight or story with your network..."
          }
        />

        <div className="textarea-bottom">

          <span>
            {post
              ? "Your content is being analyzed..."
              : "Start typing to see the live preview"}
          </span>

          <span
            className={
              isExceeded
                ? "count-error"
                : "count-normal"
            }
          >
            {characterCount.toLocaleString()} /{" "}
            {maxLength.toLocaleString()}
          </span>

        </div>

      </div>

      {isExceeded && (
        <div className="error-box">

          <div className="error-icon">
            !
          </div>

          <div>
            <strong>Character limit exceeded</strong>

            <p>
              Remove{" "}
              <b>
                {(characterCount - maxLength).toLocaleString()}
              </b>{" "}
              characters to continue.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}

export default PostTextarea;