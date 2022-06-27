import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        };

    }

    componentDidMount() {
        this.setState((state, props) => {
            let c=state.posts.concat()
            c.push(100)
            return {
                comments:c
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.comments}
            </div>
        );
    }
}

export default Header;

