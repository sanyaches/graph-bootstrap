import React from 'react';
import MatrixInput from '../MatrixInput';
import Lab4Result from './Lab4Result';

const Lab4 = props => {
  return (
    <div className="container">
      <h2 className="display-4">Связные графы. Компоненты связности</h2>
      <div>
        <h4>Матрица G:</h4>
        <MatrixInput
          matrix={props.state.AdjMatrix}
          ChangeAdjacency={props.ChangeAdjacency}
          ChangeVertexes={props.ChangeVertexes}
        />
      </div>
      <button className="btn btn-outline-success btn-lg" onClick={() => props.showResult(false)}>Расчитать</button>
      {!props.state.hideOutput && <Lab4Result graph={props.state.AdjMatrix} />}
    </div>
  );
};

export default Lab4;
