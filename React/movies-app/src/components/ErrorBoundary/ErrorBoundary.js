import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: null
    };
    render() {
        const { error } = this.state;
        const { children } = this.props;

        if (error) {
            const { name } = error;
            return <div>{name}</div>;
        }
        return children;
    }
}
