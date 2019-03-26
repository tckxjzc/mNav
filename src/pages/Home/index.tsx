import React, {Component} from 'react';
import SearchBox from "./SearchBox";
import Usually from "./Usually";

type Props = {

};
class Home extends Component<Props> {
    /**
     * lifecycle
     */
    mounted = false;

    constructor(props) {
        super(props);
        if(wbp.dev){
            console.log(this);
        }
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return <div>
            <SearchBox/>
            <Usually/>
        </div>
    }

    /**
     *properties
     */

    /**
     *method
     */

}

export default Home;