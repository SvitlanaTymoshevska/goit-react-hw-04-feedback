import PropTypes from "prop-types";
import { Notification } from "./Notification";
import { StatisticsSection, Item } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
    return (
        <StatisticsSection>
            <h2>Statistics</h2>
            {total === 0 ? (
                <Notification message="There is no feedback"></Notification>
            ) : (
                <>
                    <Item>Good: {good}</Item>
                    <Item>Neutral: {neutral}</Item>
                    <Item>Bad: {bad}</Item>
                    <Item>Total: {total}</Item>
                    <Item>Positive feedback: {positivePercentage}%</Item>
                </>  
            )}
        </StatisticsSection>
   );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired, 
};