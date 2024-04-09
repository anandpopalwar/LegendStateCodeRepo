import React, { useRef } from "react";
import { Memo } from "@legendapp/state/react";
import { useObservable } from "@legendapp/state/react";
import { Reactive } from "@legendapp/state/react";

const WithLegendState = () => {
  const RenderCount = ++useRef(0).current;
  let STATE = useObservable({
    name: "anand",
    age: "2323",
  });

  return (
    <div>
      WithLegendState
      <p className="renderCount"> rendevr Count : {RenderCount} </p>
      <p>
        {" "}
        <Memo>{() => STATE.name.get()}</Memo>{" "}
      </p>
      <p>
        {" "}
        <Memo>{() => STATE.age.get()}</Memo>{" "}
      </p>
      <hr />
      <Compo1 data={STATE} />
      <hr />
      <Compo2 data={STATE} />
    </div>
  );
};

export default WithLegendState;

const Compo1 = ({ data }) => {
  const RenderCount = ++useRef(0).current;

  return (
    <div>
      Compo1
      <p className="renderCount"> render Count : {RenderCount} </p>
      <p>
        {" "}
        <Memo>{() => data.name.get()}</Memo>{" "}
      </p>
      <p>
        {" "}
        <Memo>{() => data.age.get()}</Memo>
      </p>
      <Reactive.input
        value$={data.name.get()}
        onChange={(e) => {
          data.name.set(e.target.value);
        }}
      />
    </div>
  );
};

const Compo2 = ({ data }) => {
  const RenderCount = ++useRef(0).current;
  return (
    <div>
      Compo1
      <p className="renderCount"> render Count : {RenderCount} </p>
      <p>
        {" "}
        <Memo>{() => data.name.get()}</Memo>{" "}
      </p>
      <p>
        <Memo>{() => data.age.get()}</Memo>
      </p>
      <Reactive.input
        value$={data.age.get()}
        onChange={(e) => {
          data.age.set(e.target.value);
        }}
      />
    </div>
  );
};
