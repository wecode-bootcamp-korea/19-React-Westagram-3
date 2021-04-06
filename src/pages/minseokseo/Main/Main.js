import React from 'react';
import Nav from './Components/Nav';
import Feeds from './Components/Feeds';
import Right from './Components/RightMain';

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