import React, { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (e) => {
    const option = e.target.dataset.option;
    this.setState(prevValue => ({
        [option]: prevValue[option] + 1,
    }));  
  };

  countTotalFeedback() { 
      return Object.values(this.state).reduce((total, elem) => total + elem);
  };

  countPositiveFeedbackPercentage() { 
      return this.state.good ? (Math.round(this.state.good / this.countTotalFeedback() * 100)) : 0;
  };

  render() { 
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    ); 
  };
};
