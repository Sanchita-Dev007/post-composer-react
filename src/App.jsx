import { useState } from "react";
import "./App.css";

function App() {
  const [platform, setPlatform] = useState("twitter");
  const [post, setPost] = useState("");

  const limits = {
    twitter: 280,
    linkedin: 3000,
  };

  const maxLength = limits[platform];
  const characterCount = post.length;
  const remainingCharacters = maxLength - characterCount;
  const isExceeded = characterCount > maxLength;

  const progress = Math.min(
    (characterCount / maxLength) * 100,
    100
  );

  const handlePlatformChange = (selectedPlatform) => {
    setPlatform(selectedPlatform);
  };

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handleClear = () => {
    setPost("");
  };

  return (
    <div className="app">

      {/* Background Effects */}
      <div className="orb orb-purple"></div>
      <div className="orb orb-blue"></div>
      <div className="grid-background"></div>

      <div className="page-wrapper">

        {/* Top Navigation */}
        <nav className="top-nav">

          <div className="brand">
            <div className="brand-icon">✦</div>

            <div>
              <span className="brand-name">Social Studio</span>
              <span className="brand-subtitle">Post Composer</span>
            </div>
          </div>

          <div className="online-status">
            <span className="online-dot"></span>
            Live Editor
          </div>

        </nav>

        {/* Hero */}
        <header className="hero">

          <div>
            <div className="hero-label">
              <span>CREATE</span>
              <span className="hero-line"></span>
              <span>COMPOSE</span>
            </div>

            <h1>
              Turn your ideas into
              <span> posts.</span>
            </h1>

            <p>
              Create platform-ready content with real-time character
              validation and instant preview.
            </p>
          </div>

        </header>

        {/* Main Workspace */}
        <main className="workspace">

          {/* Left Editor */}
          <section className="editor-panel">

            <div className="panel-header">
              <div>
                <span className="panel-label">EDITOR</span>
                <h2>Create your post</h2>
              </div>

              <div className="step-badge">
                01
              </div>
            </div>

            {/* Platform */}
            <div className="field">

              <div className="field-heading">
                <label>Select platform</label>

                <span className="limit-label">
                  Limit: {maxLength.toLocaleString()}
                </span>
              </div>

              <div className="platform-grid">

                {/* Twitter */}
                <button
                  className={`platform-card ${
                    platform === "twitter" ? "selected twitter-card" : ""
                  }`}
                  onClick={() => handlePlatformChange("twitter")}
                >

                  <div className="platform-icon twitter-icon">
                    𝕏
                  </div>

                  <div className="platform-info">
                    <strong>Twitter / X</strong>
                    <span>280 characters</span>
                  </div>

                  <div className="selection-mark">
                    {platform === "twitter" ? "✓" : ""}
                  </div>

                </button>

                {/* LinkedIn */}
                <button
                  className={`platform-card ${
                    platform === "linkedin"
                      ? "selected linkedin-card"
                      : ""
                  }`}
                  onClick={() => handlePlatformChange("linkedin")}
                >

                  <div className="platform-icon linkedin-icon">
                    in
                  </div>

                  <div className="platform-info">
                    <strong>LinkedIn</strong>
                    <span>3,000 characters</span>
                  </div>

                  <div className="selection-mark">
                    {platform === "linkedin" ? "✓" : ""}
                  </div>

                </button>

              </div>
            </div>

            {/* Textarea */}
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
                  onChange={handlePostChange}
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

              {/* Error */}
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
                        {Math.abs(remainingCharacters).toLocaleString()}
                      </b>{" "}
                      characters to continue.
                    </p>
                  </div>

                </div>
              )}

            </div>

            {/* Bottom Editor Controls */}
            <div className="editor-footer">

              <div className="validation-status">

                <span
                  className={`status-dot ${
                    isExceeded ? "status-error" : ""
                  }`}
                ></span>

                <span>
                  {isExceeded
                    ? "Content needs attention"
                    : "Content is within limit"}
                </span>

              </div>

              <div className="editor-actions">

                <button
                  className="clear-button"
                  onClick={handleClear}
                  disabled={!post}
                >
                  Clear
                </button>

                <button
                  className="publish-button"
                  disabled={!post || isExceeded}
                >
                  Publish
                  <span>↗</span>
                </button>

              </div>

            </div>

          </section>

          {/* Right Preview */}
          <section className="preview-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">PREVIEW</span>
                <h2>See how it looks</h2>
              </div>

              <div className="step-badge">
                02
              </div>

            </div>

            {/* Preview Card */}
            <div
              className={`social-preview ${
                platform === "linkedin"
                  ? "linkedin-preview"
                  : ""
              }`}
            >

              <div className="preview-user">

                <div
                  className={`avatar ${
                    platform === "linkedin"
                      ? "linkedin-avatar"
                      : ""
                  }`}
                >
                  S
                </div>

                <div className="user-info">
                  <strong>Sanchita</strong>
                  <span>
                    {platform === "twitter"
                      ? "@sanchita · now"
                      : "Computer Science Student · now"}
                  </span>
                </div>

                <div className="preview-platform">
                  {platform === "twitter" ? "𝕏" : "in"}
                </div>

              </div>

              <div className="preview-content">

                {post ? (
                  <p>{post}</p>
                ) : (
                  <p className="preview-placeholder">
                    Your post preview will appear here as you type...
                  </p>
                )}

              </div>

              <div className="preview-divider"></div>

              <div className="preview-meta">

                <span>
                  {characterCount.toLocaleString()} characters
                </span>

                <span>
                  {remainingCharacters >= 0
                    ? `${remainingCharacters.toLocaleString()} remaining`
                    : `${Math.abs(
                        remainingCharacters
                      ).toLocaleString()} over limit`}
                </span>

              </div>

            </div>

            {/* Character Progress */}
            <div className="progress-card">

              <div className="progress-header">

                <div>
                  <span>Character usage</span>
                  <strong>
                    {Math.round(progress)}%
                  </strong>
                </div>

              </div>

              <div className="progress-track">
                <div
                  className={`progress-fill ${
                    isExceeded ? "progress-error" : ""
                  }`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="progress-info">

                <span>
                  {characterCount.toLocaleString()} used
                </span>

                <span>
                  {maxLength.toLocaleString()} maximum
                </span>

              </div>

            </div>

            {/* Tips */}
            <div className="tip-card">

              <div className="tip-icon">
                ✦
              </div>

              <div>
                <strong>
                  Writing tip
                </strong>

                <p>
                  Keep your message clear, concise and
                  engaging for better readability.
                </p>
              </div>

            </div>

          </section>

        </main>

        {/* Bottom Footer */}
        <footer className="page-footer">

          <span>
            React Controlled Component
          </span>

          <span>•</span>

          <span>
            Live Validation
          </span>

          <span>•</span>

          <span>
            Dynamic Character Limits
          </span>

        </footer>

      </div>
    </div>
  );
}

export default App;