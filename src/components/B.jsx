import React from "react";

function B(props) {
  console.log(props.show._owner.child.memoizedState);
  return <h1>{}</h1>;
}

export default B;
