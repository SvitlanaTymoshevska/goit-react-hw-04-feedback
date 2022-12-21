import PropTypes from "prop-types";
import { NotificationMessage } from "./Statistics.styled";

export const Notification = ({ message }) => { 
    return (
        <NotificationMessage>{message}</NotificationMessage>
    );
};

Notification.propType = {
    message: PropTypes.string.isRequired,
};

