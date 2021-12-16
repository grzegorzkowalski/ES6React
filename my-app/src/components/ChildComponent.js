import React from 'react';

const ChildComponent = (props) => {
    return (
        <>
            <h3>ChildComponentStart</h3>
                {props.children}
            <h3>ChildComponentEnd</h3>
        </>
    );
};

export default ChildComponent;