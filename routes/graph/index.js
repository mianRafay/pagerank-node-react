"use strict";
/**
 * Author:  Abdur Rafay
 * Description: Definition of graph routes
 * */

const router = require("express").Router();
const directedGraph = require("../../controllers/directedGraph");
/* Create Graph */

router.post("/createGraph", (req, res) => {
  // /directedGraph
});

/** Add Node */

/** Add Edge */

/* Delete Node and edges*/

/* Page Rank Calculation of Graph*/
router.post("/getPageRankAlgo", (req, res) => {
  // const params=req.body.params
  const params = req.body.params || [
    {
      name: "A",
      outbound: ["C", "B"],
      inbound: ["C"],
    },
    {
      name: "B",
      inbound: ["A"],
      outbound: ["C"],
    },
    {
      name: "C",
      inbound: ["A", "B"],
      outbound: ["A"],
    },
  ];

  var someone = new directedGraph();
  someone
    .getPageRankAlgo(params, 15, 0.85)
    .then((response) => {
      return res.send("200", response);
    })
    .catch((err) => {});
});

module.exports = router;
