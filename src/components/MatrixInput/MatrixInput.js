import React, {useState} from 'react';
import styles from './MatrixInput.module.css';

const MatrixInput = props => {
  let {nodes, edges} = props.matrix;
  let [vertexes, handleVertexes] = useState(nodes.join(' '));

  const onChangeVertexes = e => {
    let newValue = e.target.value;
    handleVertexes(newValue);
    props.ChangeVertexes(newValue.split(' '));
  };

  const onChangeMatrix = e => {
    props.ChangeAdjacency({
      from: e.target.dataset.node,
      to: e.target.value.split(' ')
    });
  };

  let matrixCells = nodes.map((node, i) => {
    let nodeEdges = edges.filter(edge => edge.from === node);
    nodeEdges = props.weighted
      ? nodeEdges.map(edge => edge.to + (edge.to && ':' + edge.weight))
      : nodeEdges.map(edge => edge.to);
    return (
      <div className="input-group input-group-lg mb-3" key={i}>
        <div className="input-group-prepend">
          <span className="input-group-text" >Из вершины: '{node}' в вершину: </span>
        </div>
        <input
          type="text"
          className="form-control edgeInput"
          value={nodeEdges.join(' ')}
          onChange={onChangeMatrix}
          data-node={node}
        />
      </div>
    );
  });

  return (
    <div className="mb-3">
      <div className="input-group input-group-lg mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" >Вершины:</span>
        </div>
        <input
          className="form-control edgeInput"
          type="text"
          required
          value={vertexes}
          onChange={onChangeVertexes}
        />
      </div>
      <span>Матрица смежности:</span>
      <div>{matrixCells}</div>
    </div>
  );
};

export default MatrixInput;
