import React from "react";
import PositionInSequence from "./PositionInSequence";
import List from "./List";
import FibonacciButton from "./FibonacciButton";
import { Card } from "@material-ui/core";

export const Fibonacci = () => (
    <Card variant="outlined">
        <PositionInSequence />
        <List />
        <FibonacciButton />
    </Card>
);