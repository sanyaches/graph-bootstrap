import React, {useState} from 'react';
import Lab3 from './Lab3';

const Lab3Container = () => {
  const [hideOutput, showResult] = useState(true);
  const [AdjMatrix, changeMatrix] = useState({nodes: [], edges: []});

  const ChangeAdjacency = node => {
    changeMatrix({
      nodes: AdjMatrix.nodes,
      edges: AdjMatrix.edges
        .filter(edge => edge.from !== node.from)
        .concat(
          node.to.map(item => {
            return {from: node.from, to: item};
          })
        )
    });
    showResult(true);
  };

  const ChangeVertexes = nodes => {
    showResult(true);
    changeMatrix({
      nodes,
      edges: AdjMatrix.edges.filter(edge => {
        return nodes.includes(edge.from) && nodes.includes(edge.to);
      })
    });
  };

  return (
    <Lab3
      state={{hideOutput, AdjMatrix}}
      showResult={showResult}
      ChangeAdjacency={ChangeAdjacency}
      ChangeVertexes={ChangeVertexes}
    />
  );
};

export default Lab3Container;
