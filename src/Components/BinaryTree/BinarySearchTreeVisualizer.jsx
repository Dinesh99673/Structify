import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";

const BinarySearchTreeVisualizer = () => {
  const [loading, setLoading] = useState(false);
  const [emptyTree, setEmptyTree] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [tree, setTree] = useState(null);
  const svgRef = useRef();

  // To insert a node in the BST
  const insertNode = (current, value) => {
    if (!current) {
      return { value, left: null, right: null };
    }
    if (value < current.value) {
      current.left = insertNode(current.left, value);
    } else if (value > current.value) {
      current.right = insertNode(current.right, value);
    }
    return current;
  };

  // To search for a node in the BST
  const searchNode = (current, value) => {
    if (!current) return false;
    if (current.value === value) return true;
    if (value < current.value) return searchNode(current.left, value);
    return searchNode(current.right, value);
  };

  // To delete a node in the BST
  const deleteNode = (current, value) => {
    if (!current) return null;

    if (value < current.value) {
      current.left = deleteNode(current.left, value);
    } else if (value > current.value) {
      current.right = deleteNode(current.right, value);
    } else {
      if (!current.left) return current.right;
      if (!current.right) return current.left;

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      let temp = current.right;
      while (temp.left) temp = temp.left;
      current.value = temp.value;
      current.right = deleteNode(current.right, temp.value);
    }
    return current;
  };

  const handleAdd = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      alert("Please enter a valid number.");
      return;
    }
    setTree((prevTree) => {
      const newTree = insertNode(prevTree, value);
      setEmptyTree(false);
      return newTree;
    });
    console.log(tree)
    setInputValue("");
  };

  const handleSearch = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      alert("Please enter a valid number.");
      return;
    }
    const found = searchNode(tree, value);
    alert(found ? "Value found in the tree!" : "Value not found.");
  };

  const handleSearchAndDelete = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      alert("Please enter a valid number.");
      return;
    }
    setTree((prevTree) => {
      const newTree = deleteNode(prevTree, value);
      if (!newTree) setEmptyTree(true);
      return newTree;
    });
    setInputValue("");
  };

  // D3 Visualization Effect
  useEffect(() => {
    if (!emptyTree) {
      setLoading(true);

      const width = 600;
      const height = 400;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black");

      svg.selectAll("*").remove(); // Clear previous tree

      const g = svg.append("g").attr("transform", "translate(50, 50)");

      const treeLayout = d3.tree().size([width - 100, height - 100]);
      const hierarchy = d3.hierarchy(tree, (node) =>
        node ? [node.left, node.right].filter((n) => n !== null) : []
      );

      const treeData = treeLayout(hierarchy);

      // Render links
      g.selectAll(".link")
        .data(treeData.links())
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y)
        .style("stroke", "black")
        .style("stroke-width", 2);

      // Render nodes
      const nodes = g
        .selectAll(".node")
        .data(treeData.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

      nodes
        .append("circle")
        .attr("r", 20)
        .style("fill", "lightblue")
        .style("stroke", "black")
        .style("stroke-width", 2);

      nodes
        .append("text")
        .attr("dy", 5)
        .attr("text-anchor", "middle")
        .style("fill", "black")
        .text((d) => d.data.value);

      setLoading(false);
    }
  }, [tree,handleAdd,handleSearchAndDelete]);

  return (
    <div className="p-4 md:p-4 text-cyan-300 flex flex-col items-center z-10 w-full">
      <h1 className="text-title text-2xl md:text-4xl font-bold font-serif text-center">
        Binary Search Tree Visualizer
      </h1>

      {/* Input and Buttons */}
      <div className="mt-6 flex flex-col md:flex-row md:space-y-0 md:space-x-2 w-full max-w-2xl justify-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          className="px-4 py-2 border-2 border-yellow-500 rounded-lg text-gray-900 "
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto"
        >
          Add Node
        </button>
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto"
        >
          Search
        </button>
        <button
          onClick={handleSearchAndDelete}
          className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto"
        >
          Search and Delete
        </button>
      </div>

      {emptyTree ? (
        <h4 className="text-red-600 text-lg md:text-lg font-serif text-center mt-3">
          Empty Tree
        </h4>
      ) : loading ? (
        <h4 className="text-white text-2xl md:text-xl font-serif text-center mt-3">
          Loading...
        </h4>
      ) : (
        <svg
          className="mt-[80px] shadow-gray-400 hover:shadow-gray-100 shadow-inner z-10 bg-gray-800"
          ref={svgRef}
        ></svg>
      )}
    </div>
  );
};

export default BinarySearchTreeVisualizer;
