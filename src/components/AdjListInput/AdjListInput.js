import React, {useState} from 'react';
import InputLine from '../InputLine';

const AdjListInput = props => {
  const [vertexCount, handleVertexCount] = useState('2');

  const onChangeVertexCount = e => {
    let newValue = e.target.value;
    handleVertexCount(newValue);
    props.ChangeVertexCount(parseInt(newValue));
  };

  const NumVertexCount = parseInt(vertexCount);
  let Lists = [];
  for (let i = 0; i < NumVertexCount; i++) {
    Lists.push(
      <InputLine key={i} index={i} ChangeAdjacency={props.ChangeAdjacency} />
    );
  }
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Количество вершин:</span>
        </div>
        <input
          className="form-control"
          type="number"
          required
          value={vertexCount}
          onChange={onChangeVertexCount}
        ></input>
      </div>
      <div>
        <p>Список смежности графа:</p>
        <section>{Lists}</section>
      </div>
    </div>
  );
};

export default AdjListInput;
