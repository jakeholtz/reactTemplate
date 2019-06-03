import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading : true };
    this.propTypes = { waitBeforeShow: PropTypes.number.isRequired };
  }

  render() {
    if (this.state.loading) return '';
    return <div className="app-container">Hello World!</div>
  }
}

ReactDOM.render(<App waitBeforeShow={500} />, document.getElementById('app'));