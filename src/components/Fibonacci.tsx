import React from "react";
import { connect } from "react-redux";
import NumberInSequence from "./PositionInSequence";
import List from "./List";
import FibonacciButton from "./FibonacciButton";

const Fibonacci = () => (
        <>
            <NumberInSequence />
            <List />
            <FibonacciButton />
        </>
    );

export const FibonacciContainer = connect(
    null,
    () => ({})
)(Fibonacci);