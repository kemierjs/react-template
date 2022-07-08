import './App.css';
import {Component} from "react";
import store from "./store";
import {connect} from "react-redux";

import counter from "./store/actions/counter";
class App extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    clickHandle = () => {
        this.props.run();

    }
    clickHandle1 = () => {
        this.props.like();
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandle}>点我</button>{this.props.repo}
                <button onClick={this.clickHandle1}>点我1</button>
            </div>
        )
    }
}
export default connect(
    ({buy}) => ({
        repo:buy
    }),
    counter
)(App)
