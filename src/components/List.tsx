import React from 'react';
import { connect } from 'react-redux';

interface ListProps {
    list: number[];
}

const List = (props: ListProps) => {
    const { list } = props;

    const displayedList = list.map(number => (
            <span>{number} </span>
        )
    );

    return (
        <div>
            {displayedList}
        </div>
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
