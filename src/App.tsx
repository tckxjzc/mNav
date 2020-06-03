import React, {Component} from 'react';
// import routers from './routers';
import Home from "pages/Home";


type Props = {};

class App extends Component<Props> {
    /**
     * lifecycle
     */
    mounted = false;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return <React.Fragment>
            {<Home />}
        </React.Fragment>;
    }

    /**
     *properties
     */

    /**
     *method
     */

}


export default App;
