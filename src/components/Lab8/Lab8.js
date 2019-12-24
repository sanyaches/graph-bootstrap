import React from 'react';
import MatrixInput from '../MatrixInput';
import Lab8Result from './Lab8Result';

const Lab8 = props => {
  return (
    <div className="container">
      <h2 className="display-4 mb-3">Деревья и остовы графов. Алгоритм Краскала. Алгоритм Прима</h2>
      <div>
        <h4 className="mb-3 display-4">Матрица G:</h4>
        <MatrixInput
          matrix={props.state.AdjMatrix}
          ChangeAdjacency={props.ChangeAdjacency}
          ChangeVertexes={props.ChangeVertexes}
          weighted={true}
        />
      </div>
      <button className="btn btn-outline-success btn-lg" onClick={() => props.showResult(false)}>Расчитать</button>
      {!props.state.hideOutput && <Lab8Result graph={props.state.AdjMatrix} />}
    </div>
  );
};

export default Lab8;
