import React from "react";
import { Button } from "react-bootstrap";

const MyButton = ({text,variant}) => {
    return <Button variant={variant}>{text}</Button>
};

export default MyButton;