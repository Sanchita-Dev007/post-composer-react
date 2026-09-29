function PlatformSelector({ platform, onPlatformChange }) {
  return (
    <div className="field">
      <div className="field-heading">
        <label>Select platform</label>

        <span className="limit-label">
          Limit: {platform === "twitter" ? "280" : "3,000"}
        </span>
      </div>

      <div className="platform-grid">

        {/* Twitter / X */}
        <button
          className={`platform-card ${
            platform === "twitter" ? "selected twitter-card" : ""
          }`}
          onClick={() => onPlatformChange("twitter")}
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
            platform === "linkedin" ? "selected linkedin-card" : ""
          }`}
          onClick={() => onPlatformChange("linkedin")}
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
  );
}

export default PlatformSelector;