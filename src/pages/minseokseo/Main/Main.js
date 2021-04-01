import React from 'react';
import Nav from './Nav';
import Feeds from './Feeds';
import Right from './RightMain';

class Main extends React.Component {
    render() {
        return(
            <>
                <Nav />
                <main>
                    <Feeds />
                    <Right />
                </main>
            </>
        )
    }
}

export default Main;