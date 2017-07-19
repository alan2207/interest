import React from 'react';

import Interests from '../containers/Interests';

class Home extends React.Component {


    render() {
        return (
            <div>
                <h1 className="text-center">Interest</h1>
                <Interests />
            </div>
        )
    }
}


export default Home;