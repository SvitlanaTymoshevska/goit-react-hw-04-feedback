import styled from "styled-components";

const BgColor = props => {
    switch (props.option) {
        case "good":
            return "rgb(82, 209, 82)";
        case "neutral":
            return "rgb(238, 238, 47)";
        case "bad":
            return "rgb(247, 90, 90)";
        default:
            return "white";
    }
};

export const Button = styled.button`
    margin-left: 20px;
    width: 100px;
    height: 30px;
    border: 2px solid darkgray;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;    
    text-transform: uppercase;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${BgColor}
    }
`;
