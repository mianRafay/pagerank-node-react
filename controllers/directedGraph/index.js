"use strict";
/**
 * Author:  Abdur Rafay
 * Description: Directed graph operations
 * */

class DirectedGraph {
  constructor() {
    this.returnArray = [];
  }

  /**
   * @name:addNode
   * @param: node {object}
   * @desc: Add node in the existing array
   */
  addNode(existingArray, node) {
    //check if array already have a node
    const isExist = existingArray.filter((value) => {
      return value.name === node.name;
    });

    if (isExist.length > 0) return false;

    return existingArray[node];
  }
  /**
   * @name:addEdge
   * @param: node {object}
   * @desc: Add node in the existing array
   */

  addEdge(existingMap, source, destination) {
    let existingArray = existingMap;
    //remove source and destination node from array

    existingArray = this.deleteNode(
      this.deleteNode(existingArray, source),
      destination
    );
    //update source node TO
    const sourceExist = source.inbound.filter((sourceData) => {
      return sourceData == destination.name;
    });
    if (sourceExist.length > 0) source.inbound.push(destination.name);
    //update destination node FROM
    const destinationExist = dest.outbound.filter((destData) => {
      return destData == source.name;
    });
    if (destinationExist.length > 0) destination.outbound.push(source.name);

    //add source and destimation nodes
    return this.addNode(this.addNode(existingArray, source), destination);
  }

  deleteNode(existingArray, deleteNode) {
    return existingArray.filter((value) => {
      return value.name != deleteNode;
    });
  }

  //   createGraph = () => {};

  getPageRankAlgo(existingMap, iteration, dampFactor) {
    return new Promise((resolve, reject) => {
      let existingArray = existingMap.map((e) => {
        return {
          name: e.name,
          outbound: e.outbound,
          inbound: e.inbound,
          pageRank: 1 / existingMap.length,
        };
      });
      let returnValue = this.calculatePageRankAlgo(
        existingArray,
        iteration,
        0.85
      );
      resolve(this.returnArray);
    });
  }

  calculatePageRankAlgo(existingMap, iteration = 15, dampFactor = 0.85) {
    let dampDifference = 1 - dampFactor;

    //need to traverse Array
    let sendArray = existingMap;
    let existingArray = existingMap;

    // get the pageRank of inbound nodes

    for (let i = 0; i < existingArray.length; i++) {
      sendArray[i].pageRank =
        parseFloat(dampDifference) +
        dampFactor * this.getPageRankOfNode(existingMap, existingArray[i]);
    }
    if (iteration == 1) {
      this.returnArray = sendArray;
      return this.returnArray;
    }
    this.calculatePageRankAlgo(sendArray, iteration - 1, dampFactor);
  }

  getPageRankOfNode(existingMap, node) {
    let nodePageRank = 0;
    let inBoundNodes = [];
    for (let i = 0; i < node.inbound.length; i++) {
      inBoundNodes = existingMap.filter((map) => {
        return map.name === node.inbound[i];
      });
    }
    for (let k = 0; k < inBoundNodes.length; k++) {
      nodePageRank =
        parseFloat(nodePageRank) +
        inBoundNodes[k].pageRank / inBoundNodes[k].outbound.length;
    }

    return nodePageRank;
  }
}

module.exports = DirectedGraph;
