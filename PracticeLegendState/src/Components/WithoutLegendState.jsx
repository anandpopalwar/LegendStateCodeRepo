import React, { useRef, useState } from "react";

const WithoutLegendState = () => {
  const RenderCount = ++useRef(0).current;
  const [data, setData] = useState({
    name: "anand",
    age: "2323",
  });

  return (
    <div>
      WithOutLegend
      <p className="renderCount"> rendevr Count : {RenderCount} </p>
      <hr />
      <Compo1 data={data} onchange={setData} />
      <hr />
      <Compo2 data={data} onchange={setData} />
    </div>
  );
};

export default WithoutLegendState;

const Compo1 = ({ data, onchange }) => {
  const RenderCount = ++useRef(0).current;
  return (
    <div>
      Compo1
      <p className="renderCount"> render Count : {RenderCount} </p>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>
        <input
          value={data.name}
          onChange={(e) =>
            onchange((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </p>
    </div>
  );
};

const Compo2 = ({ data, onchange }) => {
  const RenderCount = ++useRef(0).current;
  return (
    <div>
      Compo1
      <p className="renderCount"> render Count : {RenderCount} </p>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>
        <input
          value={data.age}
          onChange={(e) =>
            onchange((prev) => ({ ...prev, age: e.target.value }))
          }
        />
      </p>
    </div>
  );
};
