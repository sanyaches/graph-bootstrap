import React from 'react';
import Lab6Result from './Lab6Result';
import MatrixInput from '../MatrixInput';

const Lab6 = props => {
  return (
    <div className="container">
      <h2 className="display-4">Эйлеровы графы</h2>
      <div>
        <h4>Матрица G:</h4>
        <MatrixInput
          matrix={props.state.AdjMatrix}
          ChangeAdjacency={props.ChangeAdjacency}
          ChangeVertexes={props.ChangeVertexes}
        />
      </div>
      <button className="btn btn-outline-success btn-lg" onClick={() => props.showResult(false)}>Расчитать</button>
      {!props.state.hideOutput && <Lab6Result graph={props.state.AdjMatrix} />}
    </div>
  );
};

export default Lab6;
