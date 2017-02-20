import React, {Component, PropTypes} from 'react';
import { Provider } from 'react-redux';

class AppContainer extends Component {

    render() {
        const { store, router } = this.props;

        return (
            <Provider store={store}>
            { router }
            </Provider>
        );

    }
}

AppContainer.propTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
};

export default AppContainer;
