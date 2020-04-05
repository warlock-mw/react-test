import React from 'react';
import { useSelector } from 'react-redux';
import { Graph } from "react-d3-graph";
import { selectGraph } from '@/modules/graphModule';

function Node() {
    const data = useSelector(selectGraph);

    const graphConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: "lightgreen",
            size: 120,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",
        },
    };

    const onClickGraph = () => {
        window.alert(`Clicked the graph background`);
    };
     
    const onClickNode = nodeId => {
        window.alert(`Clicked node ${nodeId}`);
    };
     
    const onDoubleClickNode = nodeId => {
        window.alert(`Double clicked node ${nodeId}`);
    };
     
    const onRightClickNode = (event, nodeId) => {
        window.alert(`Right clicked node ${nodeId}`);
    };
     
    const onMouseOverNode = nodeId => {
        window.alert(`Mouse over node ${nodeId}`);
    };
     
    const onMouseOutNode = nodeId => {
        window.alert(`Mouse out node ${nodeId}`);
    };
     
    const onClickLink = (source, target) => {
        window.alert(`Clicked link between ${source} and ${target}`);
    };

    const onRightClickLink = (event, source, target) => {
        window.alert(`Right clicked link between ${source} and ${target}`);
    };
     
    const onMouseOverLink = (source, target) => {
        window.alert(`Mouse over in link between ${source} and ${target}`);
    };
     
    const onMouseOutLink = (source, target) => {
        window.alert(`Mouse out link between ${source} and ${target}`);
    };
     
    const onNodePositionChange = (nodeId, x, y) => {
        window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
    };

    return (
      <div>
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data.graphData}
          config={graphConfig}
          onClickNode={onClickNode}
          onDoubleClickNode={onDoubleClickNode}
          onRightClickNode={onRightClickNode}
          onClickGraph={onClickGraph}
          onClickLink={onClickLink}
          onRightClickLink={onRightClickLink}
          onMouseOverNode={onMouseOverNode}
          onMouseOutNode={onMouseOutNode}
          onMouseOverLink={onMouseOverLink}
          onMouseOutLink={onMouseOutLink}
          onNodePositionChange={onNodePositionChange}
        />
      </div>
    );
}

export default Node;