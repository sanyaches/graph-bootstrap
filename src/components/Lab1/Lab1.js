import React from 'react';
import AdjListInput from '../AdjListInput';
import Lab1Result from './Lab1Result';

const Lab1 = props => {
  return (
    <div className="container">
      <h2 className="display-4">Основные понятия, определения и способы задания графов</h2>
      <AdjListInput
        state={props.state}
        ChangeAdjacency={props.ChangeAdjacency}
        ChangeVertexCount={props.ChangeVertexCount}
      />
      <button className="btn btn-outline-success btn-lg" onClick={() => props.showResult()}>Расчитать</button>
      {!props.state.hideOutput ? (
        <Lab1Result adjacencyList={props.state.adjacencyList} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Lab1;
