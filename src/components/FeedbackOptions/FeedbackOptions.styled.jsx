import styled from "styled-components";

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
    }

    &[data-option="good"]:hover {
        background-color: rgb(82, 209, 82);
    }

    &[data-option="neutral"]:hover {
        background-color: rgb(238, 238, 47);
    }

    &[data-option="bad"]:hover {
        background-color: rgb(247, 90, 90);
    }
`;
