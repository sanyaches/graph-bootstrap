import React from 'react';
import MatrixInput from '../MatrixInput';
import Lab9Result from './Lab9Result';

const Lab9 = props => {
  return (
    <div className="container">
      <h2 className="display-4">Поток в сети. Алгоритм Форда–Фалкерсона</h2>
      <div>
        <h4>Матрица G:</h4>
        <MatrixInput
          matrix={props.state.AdjMatrix}
          ChangeAdjacency={props.ChangeAdjacency}
          ChangeVertexes={props.ChangeVertexes}
          weighted={true}
        />
      </div>
      <button className="btn btn-outline-success btn-lg" onClick={() => props.showResult(false)}>Расчитать</button>
      {!props.state.hideOutput && <Lab9Result graph={props.state.AdjMatrix} />}
    </div>
  );
};

export default Lab9;
