import React, { Component } from "react";
// import PropTypes from "prop-types";

export class Feedback extends Component {
    
    // static defaultProps = {};
    // static propTypes = {};
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
 
    onLeaveFeedback(option) {
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
            <div>
                <h1>Please leave feedback</h1>
                <button type="button" onClick={() => this.onLeaveFeedback("good")}>Good</button>
                <button type="button" onClick={() => this.onLeaveFeedback("neutral")}>Neutral</button>
                <button type="button" onClick={() => this.onLeaveFeedback("bad")}>Bad</button>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
            </div>
        );
    }
}