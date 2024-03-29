import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading : true };
  }

  componentDidMount() {
    setTimeout(() => {
       this.setState({ loading: false });
    }, this.props.waitBeforeShow);
  }

  render() {
    if (this.state.loading) return '';
    return <div className="app-container">Hello World!</div>
  }
}



ReactDOM.render(<App waitBeforeShow={500} />, document.getElementById('app'));