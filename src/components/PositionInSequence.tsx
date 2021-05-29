import React from 'react';
import { connect } from "react-redux";

interface PositionInSequenceProps {
    positionInSequence: number;
}

const PositionInSequence = (props: PositionInSequenceProps) => (
    <div>Position in Fibonacci Sequence: {props.positionInSequence}</div>
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