import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';

export const Title = ({ state, hendelClick }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <FeedbackOptions hendelClick={hendelClick} />
      <h2>Statictic</h2>
      <Statistics state={state} />
    </>
  );
};
