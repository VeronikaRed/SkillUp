import PT from 'prop-types';

import './Title.scss';

export const Title = ({ children, amount }) => {
    const count = amount + 10;
    return (
        <h1 className="title">
            {children}
            <span className="title__amount">{count}</span>
        </h1>
    );
};

Title.propTypes = {
    amount: PT.number,
    name: PT.elementType
};
