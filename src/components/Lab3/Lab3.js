import React from 'react';
import MatrixInput from '../MatrixInput';
import Lab3Result from './Lab3Result';

const Lab3 = props => {
  return (
    <div className="container">
      <h2 className="display-4 mb-3">Поиск минимального пути из v в w в орграфе G. Расстояния в графе</h2>
      <div>
        <h4 className="mb-3 display-4">Матрица G</h4>
        <MatrixInput
          matrix={props.state.AdjMatrix}
          ChangeAdjacency={props.ChangeAdjacency}
          ChangeVertexes={props.ChangeVertexes}
        />
      </div>
      <button className="btn btn-outline-success btn-lg" onClick={() => props.showResult()}>Расчитать</button>
      {!props.state.hideOutput ? (
        <Lab3Result graph={props.state.AdjMatrix} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Lab3;
