import * as React from "react";

import * as redux from "react-redux";
//import "./style.css";
//import random from "../../utils/randomData";
import Graph from "../Graph";
import CustomContext from "../../components/Utils/ContextMenu";
import { addNode } from "../../actions/graph";
import randomName from "../../utils/randomName";

class MainCanvas extends React.Component {
  selectedNode = "";
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      links: [],
      menu: [{ label: "Create Node", callback: this.addNode }],
    };
  }
  componentDidMount() {
    this.updateData();
  }
  setNode = (node) => {
    let nodes = this.state.nodes;
    let isExist = nodes.filter((value) => value.name === node.name);

    if (isExist.length > 0) {
      let newNode = {
        name: randomName.randomEl().superhero,
        x: node.x,
        y: node.y,
        inbound: [],
        outbound: [],
      };
      this.setNode(newNode);
    } else {
      this.selectedNod = node;
      return node;
    }
  };

  addNode = (e) => {
    console.log(e.state, "ADd NOde");
    let tempNodes = this.state.nodes;

    let newNode = {
      name: randomName.randomEl().superhero,
      x: e.state.x,
      y: e.state.y,
      inbound: [],
      outbound: [],
    };
    this.setNode(newNode);
    tempNodes.push(this.selectedNod);

    this.setState(
      {
        nodes: tempNodes,
      },
      () => {
        this.props.addNode(tempNodes);
      }
    );

    //call reducer action to call
  };
  deleteNode = (e) => {};
  deleteLink = (e) => {
    console.log(e, "in delete");
  };
  updateData() {
    // randomData is loaded in from external file generate_data.js
    // and returns an object with nodes and links
    //var newState = (this.state.nodes, "960px", "960px");
    //this.setState(newState);
  }

  render() {
    return (
      <>
        <CustomContext items={this.state.menu} />
        <Graph
          className="left"
          nodes={this.state.nodes}
          links={this.props.links}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  addNode: state.nodeReducer.nodes,
  links: state.nodeReducer.links,
});
export default redux.connect(mapStateToProps, { addNode })(MainCanvas);
