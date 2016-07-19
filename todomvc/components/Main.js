import React from 'react';
import ui from 'redux-ui';

const state = {
  state: {
    filter: 'all'
  }
};

class Main extends React.Component {
  render() {
    console.log('ui', this.props.ui);
    return (
      <div>
        Main
      </div>
    );
  }
}

const decoratedMain = ui(state)(Main);
export default decoratedMain;
