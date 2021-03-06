import React from 'react';
import MatrixInput from '../MatrixInput';
import Lab2Result from './Lab2Result';
import styles from './Lab2.module.css';

const Lab2 = props => {
  return (
    <div className="container">
      <h2 className="display-4 mb-3">Бинарные операции над графами</h2>
      <div className={styles.inputContainer}>
        <div>
          <h4 className="mb-3 display-4">Матрица G1</h4>
          <MatrixInput
            matrix={props.state.FirstAdjMatrix}
            ChangeAdjacency={props.ChangeFirstAdjacency}
            ChangeVertexes={props.ChangeFirstVertexes}
          />
        </div>
        <div>
          <h4 className="mb-3 display-4">Матрица G2</h4>
          <MatrixInput
            matrix={props.state.SecondAdjMatrix}
            ChangeAdjacency={props.ChangeSecondAdjacency}
            ChangeVertexes={props.ChangeSecondVertexes}
          />
        </div>
      </div>
      <button className="btn btn-outline-success btn-lg" onClick={() => props.showResult()}>Расчитать</button>
      {!props.state.hideOutput ? (
        <Lab2Result
          FirstGraph={props.state.FirstAdjMatrix}
          SecondGraph={props.state.SecondAdjMatrix}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Lab2;
