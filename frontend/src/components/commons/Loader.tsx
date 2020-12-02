import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = (props) => {

    return (
        <Spinner {...props} style={{width: '100px', height: '100px', margin: 'auto', display: "block"}}>
            <span className="sr-only">loading...</span>
        </Spinner>
    );
}

export default Loader;