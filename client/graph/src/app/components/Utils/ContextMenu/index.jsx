import * as React from "react";
import * as redux from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.css";
import { HandleContextToggle } from "../../../actions/contextMenu";
import {
  addCurrentLink,
  getCurrentLink,
  addNode,
  addLink,
} from "../../../actions/graph";
import node from "../../../reducers/node";

class CustomContext extends React.Component {
  constructor(props) {
    super(props);
    this.contextRef = React.createRef();
    this.returnMenu = this.returnMenu.bind(this);

    this.state = {
      visible: false,
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    var self = this;
    document.addEventListener("contextmenu", function (event) {
      console.log(event, "eventsss");
      event.preventDefault();
      const clickX = event.clientX;
      const clickY = event.clientY;
      self.setState({ visible: true, x: clickX, y: clickY });
    });
    document.addEventListener("click", function (event) {
      console.log(event);

      if (self.contextRef.current)
        if (self.contextRef.current.id == "customcontext") {
          self.click(event.target.getAttribute("index"));
        }
      /**
       * if getting id
       * get value from selectedNode props
       * if id exist
       * then add selected -> to co-ordinate
       * push in the links
       * then update nodes structure
       */
      if (event.target.id) {
        // self.props.getCurrentLink();
        if (event.target.tagName === "circle") {
          let currentLink = self.props.current_link;
          let isExist = currentLink.filter((val) => val === event.target.id);
          if (isExist.length === 0) {
            currentLink.push(event.target.id);
            self.props.addCurrentLink(currentLink);
            if (currentLink.length > 1) {
              if (!self.createLinksByNodes(currentLink[0], currentLink[1])) {
                currentLink.pop();
                self.props.addCurrentLink(currentLink);
              }
            }
          }
        }
      }
      event.preventDefault();
      self.setState({ visible: false, x: 0, y: 0 });
    });
  }

  click(index) {
    if (index)
      if (this.props.items[index].callback)
        this.props.items[index].callback(this);
      else {
        console.log("callback not registered for the menu item");
      }
  }

  returnMenu(items) {
    var myStyle = {
      position: "absolute",
      top: `${this.state.y}px`,
      left: `${this.state.x + 5}px`,
    };
    let clickEvent = "";
    var self = this;

    //on line disabled
    return (
      <div
        className="custom-context"
        id="customcontext"
        style={myStyle}
        ref={this.contextRef}
      >
        {items.map((item, index, arr) => {
          if (arr.length - 1 == index) {
            return (
              <div
                key={index}
                className="custom-context-item-last"
                index={index}
              >
                {item.label}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="custom-context-item"
                index={index}
              >
                {item.label}
              </div>
            );
          }
        })}
      </div>
    );
  }


  createLinksByNodes = (to, from) => {
    let nodes = this.props.nodes;
    let links = this.props.links;
    let source = nodes.filter((e) => {
      return e.name === to && e.outbound.filter((val) => val !== to);
    });

    let destination = nodes.filter((e) => {
      return e.name === from && e.inbound.filter((val) => val !== from);
    });
    if (source.length == 0 || destination.length == 0) {
      return false;
    }
    source[0].outbound.push(from);
    destination[0].inbound.push(to);
    let link = {
      id: source[0].name + destination[0].name,
      x1: source[0].x,
      y1: source[0].y,
      x2: destination[0].x,
      y2: destination[0].y,
    };
    links.push(link);
    //add link
    this.props.addLink(links);
    //update nodes

    this.updateNodes(this.updateNodes(nodes, source[0]), destination[0]);
    return true;
  };

  updateNodes = (list, node) => {
    let unfiltered = list.filter((a) => {
      return a.name !== node.name;
    });
    unfiltered.push(node);
    //add nodes
    this.props.addNode(unfiltered);
    return unfiltered;
  };

  render() {
    return (
      <div id="cmenu">
        {this.state.visible ? this.returnMenu(this.props.items) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contextToggle: state.contextReducer.handleContextToggle,
  addCurrentLink: state.nodeReducer.addCurrentLink,
  current_link: state.nodeReducer.current_link,
  nodes: state.nodeReducer.nodes,
  links: state.nodeReducer.links,
});
export default redux.connect(mapStateToProps, {
  HandleContextToggle,
  addCurrentLink,
  getCurrentLink,
  addNode,
  addLink,
})(CustomContext);
