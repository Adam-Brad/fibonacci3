import React from 'react';
import { connect } from 'react-redux';
import { Box } from "@material-ui/core";

interface ListProps {
    list: number[];
}

const List = (props: ListProps) => {
    const displayedList = props.list.map(number => (
            <span>{number.toLocaleString()} </span>
        )
    );

    return (
        <Box>
            {displayedList}
        </Box>
    );
};

interface StoreState {
    list: number[];
}

const mapStateToProps = (state: StoreState) => ({
    list: state.list
});

export default connect(
    mapStateToProps,
    () => ({})
)(List);
