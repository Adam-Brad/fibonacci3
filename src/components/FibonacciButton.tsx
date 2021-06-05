import React, {Dispatch, useState} from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { Button } from '@material-ui/core';

interface FibonacciButtonProps {
    onClick: () => void;
}

const FibonacciButton = (props: FibonacciButtonProps) => {
    const [isEven, setIsEven] = useState<boolean>(true);

    const handleEvenOrOdd = () => {
        setIsEven(!isEven);
        props.onClick();
    };

    return (
        <>
            <Button variant="contained" onClick={handleEvenOrOdd}>Click</Button>
            <div>{ isEven ? `Even Click` : `Odd Click`}</div>
        </>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onClick: () => dispatch({
        type: 'FIBONACCI'
    })
});

export default connect(
    null,
    mapDispatchToProps
)(FibonacciButton);