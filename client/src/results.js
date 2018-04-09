import React, {Component} from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.location)
    return (
      <div className="App">
        <label>Hi</label>
      </div>
    );
  }
}

export default Results;
