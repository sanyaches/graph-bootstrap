import React, { useState } from "react";

const InputLine = props => {
    const [val, handleVal] = useState("");

    const ChangeValue = e => {
        let value = e.target.value;
        value = value.replace(/[^\d\s]/g, "");
        handleVal(value);
        props.ChangeAdjacency(props.index, value);
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" >Вершина выхода {props.index}: вершины выхода: </span>
            </div>
            <input className="form-control" type="text" value={val} onChange={ChangeValue}></input>
        </div>
    );
};

export default InputLine;
