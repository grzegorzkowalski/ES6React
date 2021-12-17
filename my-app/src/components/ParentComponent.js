import React from 'react';

const ParentComponent = (props) => {
    return (
        <>
            <h2>ParentComponentStart</h2>
                {props.children}
            <h2>ParentComponentEnd</h2>
        </>
    );
};

export default ParentComponent;