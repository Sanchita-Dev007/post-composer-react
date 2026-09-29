function CharacterCounter({
  characterCount,
  maxLength,
  isExceeded,
}) {
  const progress = Math.min(
    (characterCount / maxLength) * 100,
    100
  );

  return (
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
  );
}

export default CharacterCounter;