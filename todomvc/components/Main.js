import React, { PropTypes } from 'react';
import ui from 'redux-ui';

const state = {
  state: {
    filter: 'all'
  }
};
const propTypes = {
  ui: PropTypes.object
};

class Main extends React.Component {
  render() {
    return (
      <div>
        Main
      </div>
    );
  }
}

Main.propTypes = propTypes;
const decoratedMain = ui(state)(Main);
export default decoratedMain;
