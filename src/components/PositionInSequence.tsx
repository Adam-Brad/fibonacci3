import React from 'react';
import { connect } from "react-redux";
import { Typography } from '@material-ui/core';

interface PositionInSequenceProps {
    positionInSequence: number;
}

const PositionInSequence = (props: PositionInSequenceProps) => (
    <Typography>Position in Fibonacci Sequence: {props.positionInSequence}</Typography>
);

interface StoreState {
    positionInSequence: number
}

const mapStateToProps = (state: StoreState) => ({
    positionInSequence: state.positionInSequence
});

export default connect(
    mapStateToProps,
    () => ({})
)(PositionInSequence);