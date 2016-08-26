import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    const p = this.props;
    debugger
    return (
      <div>
        <p> {p.description} {p.lat} {p.lon} </p>
      </div>
    )
  }
}

export default BenchIndex;
