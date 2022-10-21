export const FeedbackOptions = ({ hendelClick }) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button
        type="button"
        className="btn btn-success"
        name="good"
        onClick={hendelClick}
      >
        Good
      </button>
      <button
        type="button"
        className="btn btn-warning"
        name="neutral"
        onClick={hendelClick}
      >
        Neutral
      </button>
      <button
        type="button"
        className="btn btn-danger"
        name="bad"
        onClick={hendelClick}
      >
        Bad
      </button>
    </div>
  );
};
