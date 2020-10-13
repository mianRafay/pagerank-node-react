import React from "react";
import Circle from "../Circle";
import Arrow from "../Arrow";
import "./style.css";
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: this.props.nodes || [],
      links: this.props.links || [],
    };
  }
  render() {
    return (
      <>
        {/* {this.state.nodes.map((value, key) => { */}
        {/* return */}
        <Circle
          className="left"
          nodes={this.state.nodes}
          links={this.state.links}
        />
        {/* })} */}
      </>
    );
  }
}

export default Graph;
