import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { Action } from "redux";

interface FibonacciButtonProps {
    onClick: () => void;
}

const FibonacciButton = (props: FibonacciButtonProps) => (
    <>
        <button onClick={props.onClick}>Click</button>
    </>
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