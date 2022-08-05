var masterList = {
  "1n": [],
  "1e": [],
}


// create an array with nodes
var nodes = new vis.DataSet(masterList["1n"]);
// create an array with edges
var edges = new vis.DataSet(masterList["1e"]);

var data = {
  nodes: nodes,
  edges: edges,
}
//Pretty print edge and node data for easy level-making
async function ppData(nodes, edges) {
  var nodeDict = {}
  for (i=0; i<nodes.length; i++) {
    nodeDict[nodes[i].id] = i+1
  }
  nodesString = "["
  for (n=1; n<=nodes.length; n++){
    nodesString += "{id: " + n.toString() + "},"
  }
  nodesString += "],"

  edgesString = "["
  for (e=0; e<edges.length; e++) {
    edgesString += "{from: " + nodeDict[edges[e].from] + ", to: " + nodeDict[edges[e].to] + "},"
  }
  edgesString += "],"
  console.log(nodesString)
  console.log(edgesString)
}

async function getExport() {
  var out_data = {
    nodes: data.nodes.get(),
    edges: data.edges.get()
  }
  ppData(data.nodes.get(), data.edges.get())
  return out_data
};

// create a network
var container = document.getElementById("mynetwork");
// var data = {
//   nodes: nodes,
//   edges: edges,
// };
var options = {
  width: '150%',
  height: '150%',
  interaction: {
    hover: true,
    zoomView: false,
    dragView: false,
    navigationButtons: true
  },
  manipulation: {
    enabled: true,
    addNode: function (nodeData, callback) {
      nodeData.label = '';
      callback(nodeData);
      setSageCellText();
      updateHistory(nodeData);
    },
    addEdge: async function (edgeData, callback) {
      res = await edgeNotExists(edgeData)
      if (res && edgeData.to != edgeData.from) { //ensure no loops
        callback(edgeData);
        setSageCellText();
        updateHistory(edgeData);
      }

    },
    deleteNode: true,
    deleteEdge: true,
    editEdge: true
  },
};
var network = new vis.Network(container, data, options);

moveHistory = [] //list of node and edge data representing move history
moveHistoryType = ""

function nodeOrEdge(move) {
  try { t = move.to.toString(); return 'Edge' }
  catch { return 'Node' }
}

function updateHistory(move) {
  moveHistory.push(move)
  type = nodeOrEdge(move)
  if (type == 'Node') { moveHistoryType = moveHistoryType + '.' }
  else { moveHistoryType = moveHistoryType + '|' }
}

function countScore() {
  score = 0
  for (m = 0; m < moveHistoryType.length; m++) {
    if (moveHistoryType[m] == '|') { score += 1 }
    else { score += 2 }
  }
  return score
}

function copyEvent(id) {
  var str = document.getElementById(id);
  window.getSelection().selectAllChildren(str);
  document.execCommand("Copy")
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// function undoLastMove() {
//   move = moveHistory.pop()
//   function isNotMove(m) {
//     return m != move;
//   }
//   edges = edges.filter(isNotMove)
//   nodes = nodes.filter(isNotMove)
//   vis.setData({nodes, edges})
// }

//returns true if the given edge data isn't in the graph
async function edgeNotExists(edge) {
  var outData = await getExport()
  edgeList = outData.edges
  for (e = 0; e < edgeList.length; e++) {
    if (edgeList[e].to == edge.to && edgeList[e].from == edge.from) {
      return false
    }
    if (edgeList[e].to == edge.from && edgeList[e].from == edge.to) {
      return false
    }
  }
  return true
}

var graphString = "{}" //what Sage interprets as a graph

async function visToSage() {
  //build a dictionary of nodes to neighbors
  sageData = {}
  out_data = await getExport()
  nodes = out_data.nodes
  edges = out_data.edges
  //put nodes in sageData keys
  for (i = 0; i < nodes.length; i++) {
    sageData[i] = []
  }
  //put edges in sageData values 
  function getNodeNum(node) { //takes in node, returns associated node number
    for (k = 0; k < nodes.length; k++) {
      if (nodes[k].id == node) {
        return k
      }
    }
    return 999 //if fail
  }
  for (j = 0; j < edges.length; j++) {
    edge = edges[j]
    fromNum = getNodeNum(edge.from)
    toNum = getNodeNum(edge.to)
    sageData[fromNum].push(toNum)
    sageData[toNum].push(fromNum)
  }
  regex = /["]+/g
  graphString = JSON.stringify(sageData).replace(regex, '')
}


// Updates sageData to current graph and changes the SageCell input text
async function setSageCellText() {
  await visToSage()
  document.getElementById("graphstring").value = "G = Graph(" + graphString + ") \nAut = G.automorphism_group() \nif (Aut.cardinality() > 1): print('This graph has', Aut.cardinality(), 'automorphisms.') \nelse:\n\t print('Only 1 Automorphism! Nice!')"
  // await sleep(1000)
  // network.fit({
  //   animation :
  //   {             // animation object, can also be Boolean
  //   duration: 1000,                 // animation duration in milliseconds (Number)
  //   easingFunction: "easeInQuad"
  // }   } )
}
async function initializePuzzle() {
  await visToSage()
  cell = await sagecell.makeSagecell({
    inputLocation: "#graphstring",
    template: sagecell.templates.minimal,
    outputLocation: "#output",
    evalButtonText: "Check Symmetries",
    code: "G = Graph(" + graphString + ") \nAut = G.automorphism_group() \nif (Aut.cardinality() > 1): print('This graph has', Aut.cardinality(), 'automorphisms.') \nelse:\n\t print('Only 1 Automorphism! Nice!')"  });
}
