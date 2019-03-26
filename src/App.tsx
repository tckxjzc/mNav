import React, {Component} from 'react';
import routers from './routers';


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
            {routers}
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