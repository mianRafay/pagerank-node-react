import React from "react";
import "./style.css";
import "../../../../style.css";
import * as redux from "react-redux";
import { getPageRank, resetData } from "../../../actions/graph";
class SideNav extends React.Component {
  getPageRank = () => {
    this.props.getPageRank(this.props.nodes);
  };
  resetData = () => {
    this.props.resetData();
  };

  render() {
    return (
      <>
        <div className="nav">
          <div className="container">
            <a
              onClick={this.getPageRank}
              className={
                this.props.nodes.length < 1
                  ? "btn btn-outline btn-style"
                  : "btn btn-outline btn-style"
              }
              style={{ color: this.props.nodes.length < 1 ? "#f7f3f3" : "" }}
              disabled={this.props.nodes.length < 1}
            >
              Calculate Page Rank
            </a>
          </div>
          {this.props.nodes.length < 1 && this.props.links.length < 1 && (
            <div>
              <ul>
                <li>Please add a node and make link to get page rank.</li>
              </ul>
            </div>
          )}
          <div className="container">
            <a onClick={this.resetData} className="btn btn-colour-1 btn-style">
              Refresh View
            </a>
          </div>
          {this.props.pageRank.length > 0 && (
            <div>
              <section className="pageRankStyling">
                <h3>Page Rank</h3>
                <ol>
                  {this.props.pageRank.map((value, key) => {
                    return (
                      <li>
                        {value.name} - {value.pageRank}{" "}
                      </li>
                    );
                  })}
                </ol>
              </section>
            </div>
          )}

          <div></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  current_link: state.nodeReducer.current_link,
  nodes: state.nodeReducer.nodes,
  links: state.nodeReducer.links,
  pageRank: state.nodeReducer.pageRank,
});
export default redux.connect(mapStateToProps, { getPageRank, resetData })(
  SideNav
);
