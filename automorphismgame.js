var masterList = { // Level data
  "1n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  "1e": [{ from: 1, to: 3 }, { from: 1, to: 2 }, { from: 2, to: 4 }, { from: 2, to: 5 }],
  "2n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
  "2e": [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 1 }],
  "3n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  "3e": [{ from: 1, to: 2 }, { from: 3, to: 2 }, { from: 3, to: 4 }, { from: 4, to: 5 }],
  "4n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
  "4e": [{ from: 1, to: 3 }, { from: 1, to: 2 }, { from: 2, to: 4 }, { from: 2, to: 5 }, { from: 6, to: 2 }, { from: 6, to: 1 }],
  "5n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
  "5e": [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }, { from: 8, to: 1 },
  { from: 1, to: 4 }, { from: 2, to: 5 }, { from: 3, to: 6 }, { from: 4, to: 7 }, { from: 5, to: 8 }, { from: 6, to: 1 }, { from: 7, to: 2 }, { from: 8, to: 3 },],
  "6n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
  "6e": [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }, { from: 8, to: 1 },
  { from: 1, to: 4 }, { from: 5, to: 8 }, { from: 2, to: 7 }, { from: 3, to: 6 },],
  "7n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
  "7e": [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
  { from: 7, to: 1 }],
  "8n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  "8e": [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 }, { from: 2, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }, { from: 3, to: 4 }, { from: 3, to: 5 }, { from: 4, to: 5 },],
  "9n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
  "9e": [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
  { from: 7, to: 1 }, { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 }, { from: 1, to: 6 }, { from: 1, to: 8 }, { from: 1, to: 9 }],
  "10n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
  "10e": [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
  { from: 7, to: 8 }, { from: 8, to: 9 }, { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 }, { from: 1, to: 6 }, { from: 1, to: 8 }, { from: 1, to: 9 }, { from: 9, to: 2 }],
  "11n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
  "11e": [{ from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
  { from: 7, to: 9 }, { from: 7, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 }, { from: 1, to: 6 }, { from: 1, to: 8 }, { from: 1, to: 9 }, { from: 9, to: 2 }],
  "11n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
  "12n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },],
  "12e": [{ from: 5, to: 3 }, { from: 5, to: 4 }, { from: 1, to: 2 }, { from: 3, to: 2 }, { from: 1, to: 6 }, { from: 6, to: 4 }, { from: 4, to: 1 }, { from: 1, to: 3 }, { from: 3, to: 4 },],
  "13n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },],
  "13e": [{ from: 1, to: 4 }, { from: 1, to: 2 }, { from: 4, to: 7 }, { from: 4, to: 5 }, { from: 2, to: 6 }, { from: 2, to: 3 },],
  "14n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 },],
  "14e": [{ from: 1, to: 4 }, { from: 1, to: 2 }, { from: 4, to: 7 }, { from: 4, to: 5 }, { from: 2, to: 6 }, { from: 2, to: 3 }, { from: 7, to: 10 }, { from: 5, to: 9 }, { from: 3, to: 8 }, { from: 11, to: 6 }, { from: 11, to: 10 }, { from: 8, to: 11 }, { from: 9, to: 10 },],
  "15n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },],
  "15e": [{ from: 1, to: 2 }, { from: 5, to: 4 }, { from: 1, to: 3 }, { from: 2, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }, { from: 1, to: 4 }, { from: 1, to: 6 }, { from: 6, to: 4 }, { from: 1, to: 6 }],
  "16n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 },],
  "16e": [{ from: 1, to: 4 }, { from: 1, to: 2 }, { from: 4, to: 7 }, { from: 4, to: 5 }, { from: 2, to: 6 }, { from: 2, to: 3 }, { from: 6, to: 8 }, { from: 7, to: 14 }, { from: 7, to: 13 }, { from: 5, to: 11 }, { from: 5, to: 12 }, { from: 3, to: 9 }, { from: 3, to: 10 }, { from: 15, to: 6 },],
  "17n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },],
  "17e": [{ from: 7, to: 6 }, { from: 6, to: 5 }, { from: 4, to: 5 }, { from: 3, to: 5 }, { from: 5, to: 2 }, { from: 5, to: 1 },],
  "18n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },],
  "18e": [{ from: 1, to: 2 }, { from: 5, to: 4 }, { from: 1, to: 3 }, { from: 2, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }, { from: 1, to: 4 }, { from: 1, to: 6 }, { from: 6, to: 4 }, { from: 3, to: 4 }, { from: 5, to: 1 }, { from: 6, to: 2 },],
  "19n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },],
  "19e": [{ from: 6, to: 3 }, { from: 5, to: 3 }, { from: 4, to: 3 }, { from: 1, to: 3 }, { from: 2, to: 3 }, { from: 7, to: 3 },],
  "20n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 },], //G(8,3), Mobius-Kantor Graph
  "20e": [{ from: 6, to: 5 }, { from: 6, to: 7 }, { from: 7, to: 4 }, { from: 4, to: 2 }, { from: 5, to: 1 }, { from: 8, to: 2 }, { from: 3, to: 1 }, { from: 3, to: 8 }, { from: 7, to: 14 }, { from: 4, to: 10 }, { from: 2, to: 9 }, { from: 8, to: 11 }, { from: 3, to: 15 }, { from: 1, to: 12 }, { from: 5, to: 13 }, { from: 6, to: 16 }, { from: 16, to: 9 }, { from: 9, to: 12 }, { from: 12, to: 14 }, { from: 15, to: 16 }, { from: 14, to: 11 }, { from: 11, to: 13 }, { from: 13, to: 10 }, { from: 10, to: 15 },],
  "21n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },],
  "21e": [{ from: 2, to: 3 }, { from: 4, to: 1 }, { from: 5, to: 6 },],
  "22n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },],
  "22e": [{ from: 2, to: 3 }, { from: 4, to: 1 }, { from: 5, to: 6 }, { from: 6, to: 8 }, { from: 3, to: 10 }, { from: 1, to: 9 }, { from: 6, to: 7 }, { from: 1, to: 7 }, { from: 7, to: 3 },],
  "23n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },],
  "23e": [{ from: 6, to: 5 }, { from: 6, to: 4 }, { from: 4, to: 2 }, { from: 2, to: 5 }, { from: 3, to: 7 }, { from: 8, to: 3 }, { from: 8, to: 1 }, { from: 7, to: 1 }, { from: 1, to: 2 },],
  "24n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },],
  "24e": [{ from: 2, to: 3 }, { from: 4, to: 1 }, { from: 5, to: 6 }, { from: 3, to: 10 }, { from: 1, to: 9 }, { from: 6, to: 7 }, { from: 1, to: 7 }, { from: 7, to: 3 }, { from: 10, to: 5 }, { from: 5, to: 8 }, { from: 8, to: 4 }, { from: 4, to: 9 }, { from: 9, to: 2 }, { from: 2, to: 10 }, { from: 6, to: 8 },],
  "25n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },],
  "25e": [{ from: 3, to: 2 }, { from: 3, to: 4 }, { from: 1, to: 3 }, { from: 4, to: 1 }, { from: 2, to: 1 }, { from: 4, to: 2 },],
  "26n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },],
  "26e": [{ from: 3, to: 2 }, { from: 3, to: 1 }, { from: 2, to: 4 }, { from: 4, to: 1 }, { from: 1, to: 5 }, { from: 6, to: 1 },],
  "27n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 },],
  "27e": [{ from: 5, to: 7 }, { from: 7, to: 9 }, { from: 8, to: 6 }, { from: 6, to: 5 }, { from: 5, to: 3 }, { from: 3, to: 2 }, { from: 5, to: 4 }, { from: 1, to: 4 },],
  "28n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 },],
  "28e": [{ from: 5, to: 7 }, { from: 7, to: 9 }, { from: 8, to: 6 }, { from: 6, to: 5 }, { from: 5, to: 3 }, { from: 3, to: 2 }, { from: 5, to: 4 }, { from: 1, to: 4 }, { from: 8, to: 7 }, { from: 9, to: 4 }, { from: 1, to: 3 }, { from: 2, to: 6 }, { from: 5, to: 9 }, { from: 5, to: 8 }, { from: 5, to: 2 }, { from: 5, to: 1 },],
  "29n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 },],
  "29e": [{ from: 7, to: 5 }, { from: 7, to: 6 }, { from: 7, to: 3 }, { from: 4, to: 2 }, { from: 2, to: 1 }, { from: 1, to: 3 }, { from: 3, to: 4 }, { from: 6, to: 5 }, { from: 6, to: 12 }, { from: 12, to: 13 }, { from: 9, to: 12 }, { from: 13, to: 9 }, { from: 5, to: 8 }, { from: 11, to: 8 }, { from: 10, to: 11 }, { from: 8, to: 10 },],
  "30n": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },],
  "30e": [{ from: 6, to: 5 }, { from: 6, to: 4 }, { from: 4, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 5, to: 3 }, { from: 5, to: 4 }, { from: 5, to: 2 }, { from: 6, to: 1 }, { from: 6, to: 2 }, { from: 4, to: 3 }, { from: 4, to: 2 }, { from: 1, to: 3 }, { from: 3, to: 6 }, { from: 5, to: 1 },],
}

var network
var data
var nodes
var edges
var cell

//Get day
var then = new Date("2022-08-01") //days start from August 1st
now = new Date
day = Math.round((now - then + (1000 * 60 * 60 * 9)) / (1000 * 60 * 60 * 24));
console.log("Day: " + day)

// Make the graph given the day (or "0" if current day)
async function defineGraph(dayString) {
  if (dayString == "0") {
    dayString = day.toString()
  } else {
    day = dayString
  }
  // create an array with nodes
  nodes = new vis.DataSet(masterList[dayString + "n"]);
  // create an array with edges
  edges = new vis.DataSet(masterList[dayString + "e"]);
  data = {
    nodes: nodes,
    edges: edges,
  }
  // create a network
  var container = document.getElementById("mynetwork");

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
      deleteNode: false,
      deleteEdge: false,
      editEdge: false
    },
  };
  network = new vis.Network(container, data, options);
}

async function getExport() {
  var out_data = {
    nodes: data.nodes.get(),
    edges: data.edges.get()
  }
  console.log(out_data)
  return out_data
};



/******************** How To Play Popup *******************/

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("myForm").style.overflowY = "scroll";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.body.style.overflow = "visible";
}

/*********************************************************/

moveHistory = [] //list of node and edge data representing move history
moveHistoryType = ""

function nodeOrEdge(move) {
  try { t = move.to.toString(); return 'Edge' }
  catch { return 'Node' }
}

// Track move history into moveHistoryType string
function updateHistory(move) {
  moveHistory.push(move)
  type = nodeOrEdge(move)
  if (type == 'Node') { moveHistoryType = moveHistoryType + '.' }
  else { moveHistoryType = moveHistoryType + '|' }
}

// Counts final score: 2 points for every node, 1 point for edge
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

// Translates the graph into information the Sagecell can understand
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
      // console.log(nodes[k], node)
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
  document.getElementById("graphstring").value = "G = Graph(" + graphString + ") \nAut = G.automorphism_group() \nif (Aut.cardinality() > 1): print('This graph has', Aut.cardinality(), 'automorphisms.') \nif (Aut.cardinality() > 1): print('Try again!') \nelse:\n\t print('NAP #" + day + "')\n\t print('" + moveHistoryType + "✅')\n\t print('My score: '," + countScore() + ")"
  await addCopyVisibility()
  await sleep(1000)
  network.fit({
    animation:
    {             // animation object, can also be Boolean
      duration: 1000,                 // animation duration in milliseconds (Number)
      easingFunction: "easeInQuad"
    }
  })
}


document.getElementById("copyButton").style.visibility = 'hidden'
async function showCopy() {
  document.getElementById("copyButton").style.visibility = 'visible'
  console.log("ran showCopy()")
}
async function addCopyVisibility() {
  document.getElementsByClassName("sagecell_evalButton")[0].addEventListener("click", showCopy(), false);
}

// Creates drop down menu for days.html
async function makeDropDown() {
  $(function () {
    var select = document.getElementById("daySelect");
    for (i = 1; i <= day; i++) {
      var el = document.createElement("option");
      el.innerText = i;
      el.value = i;
      if (i == 1) {
        el.style.color = '#80f46f'
      }
      select.append(el);
    }
  });
}
makeDropDown()

// Re-adds the output span after it's deleted by daySelectChange()
async function addOutputSpan() {
  $(function () {
    var outputContainer = document.getElementById("output-container");
      var el = document.createElement("span");
      el.setAttribute("id", "output")
      outputContainer.append(el)
  });
}

// Re-adds the graphstring textarea after it's deleted by daySelectChange()
async function addGraphstringSpan() {
  $(function () {
    var graphstringContainer = document.getElementById("graphstring-container");
      var el = document.createElement("textarea");
      el.setAttribute("id", "graphstring")
      graphstringContainer.append(el)
  });
}

// For days.html, to change the puzzle
async function daySelectChange(dayValue) {
  day = dayValue
  await sagecell.deleteSagecell(cell)
  await addOutputSpan()
  await addGraphstringSpan()
  await initializePuzzle(dayValue)
}

// Main function! Creates the Sagecell and initializes the graph and Sagecell info.
async function initializePuzzle(dayString) {
  await defineGraph(dayString)
  await visToSage()
  cell = await sagecell.makeSagecell({
    inputLocation: "#graphstring",
    template: sagecell.templates.minimal,
    outputLocation: "#output",
    evalButtonText: "Check Symmetries",
    code: "G = Graph(" + graphString + ") \nAut = G.automorphism_group() \nprint('This graph has', Aut.cardinality(), 'automorphisms.') \nif (Aut.cardinality() > 1): print('Try again!')\nelse:\n\t print('NAP #" + day + "')\n\t print('" + moveHistoryType + "✅')\n\t print('My score: '," + countScore() + ")"
  });
}