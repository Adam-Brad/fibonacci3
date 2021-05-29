import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { Button } from '@material-ui/core';

interface FibonacciButtonProps {
    onClick: () => void;
}

const FibonacciButton = (props: FibonacciButtonProps) => (
    <Button variant="contained" onClick={props.onClick}>Click</Button>
);

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onClick: () => dispatch({
        type: 'FIBONACCI'
    })
});

export default connect(
    null,
    mapDispatchToProps
)(FibonacciButton);