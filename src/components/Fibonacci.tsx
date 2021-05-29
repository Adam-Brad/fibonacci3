import React from "react";
import { connect } from "react-redux";
import PositionInSequence from "./PositionInSequence";
import List from "./List";
import FibonacciButton from "./FibonacciButton";
import { Card } from "@material-ui/core";

const Fibonacci = () => (
        <Card variant="outlined">
            <PositionInSequence />
            <List />
            <FibonacciButton />
        </Card>
    );

export const FibonacciContainer = connect(
    null,
    () => ({})
)(Fibonacci);