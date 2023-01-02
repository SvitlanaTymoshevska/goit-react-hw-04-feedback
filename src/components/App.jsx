import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const option = event.target.dataset.option;

    switch (option) {
      case "good":
        setGood(prevState => prevState + 1) 
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1) 
        break;
      case "bad":
        setBad(prevState => prevState + 1) 
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => { 
      return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => { 
      return good ? (Math.round(good / countTotalFeedback() * 100)) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
        
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  ); 
};
