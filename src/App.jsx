import { useState } from "react";
import "./App.css";

import PlatformSelector from "./components/PlatformSelector";
import PostTextarea from "./components/PostTextarea";
import CharacterCounter from "./components/CharacterCounter";

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
      <div className="orb orb-purple"></div>
      <div className="orb orb-blue"></div>
      <div className="grid-background"></div>

      <div className="page-wrapper">

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

        <main className="workspace">

          {/* Editor */}
          <section className="editor-panel">

            <div className="panel-header">
              <div>
                <span className="panel-label">EDITOR</span>
                <h2>Create your post</h2>
              </div>

              <div className="step-badge">01</div>
            </div>

            <PlatformSelector
              platform={platform}
              onPlatformChange={handlePlatformChange}
            />

            <PostTextarea
              post={post}
              onPostChange={handlePostChange}
              characterCount={characterCount}
              maxLength={maxLength}
              isExceeded={isExceeded}
              platform={platform}
            />

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

          {/* Preview */}
          <section className="preview-panel">

            <div className="panel-header">
              <div>
                <span className="panel-label">PREVIEW</span>
                <h2>See how it looks</h2>
              </div>

              <div className="step-badge">02</div>
            </div>

            <div
              className={`social-preview ${
                platform === "linkedin" ? "linkedin-preview" : ""
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

            <CharacterCounter
              characterCount={characterCount}
              maxLength={maxLength}
              isExceeded={isExceeded}
            />

            <div className="tip-card">

              <div className="tip-icon">✦</div>

              <div>
                <strong>Writing tip</strong>

                <p>
                  Keep your message clear, concise and engaging
                  for better readability.
                </p>
              </div>

            </div>

          </section>

        </main>

        <footer className="page-footer">
          <span>React Controlled Component</span>
          <span>•</span>
          <span>Live Validation</span>
          <span>•</span>
          <span>Dynamic Character Limits</span>
        </footer>

      </div>
    </div>
  );
}

export default App;