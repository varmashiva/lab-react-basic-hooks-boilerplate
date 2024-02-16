import { useEffect, useState } from "react";

function Para1() {
  const [para, setpara] = useState("");
  useEffect(() => {
    if (para !== "") {
      alert("clicked the context button");
    }
  }, [para]);

  function handler() {
    if (para == "") {
      setpara(
        "This is a live lab where your goal is to practice the following concept and learn various use cases with hooks. What should you do Here is the boilerplate link of the lab. Fork the project and get started with the lab.InstructionsIn this lab we will try to work with hooks in react. You can use a single component or create one component for each progression. This lab is just for your reference and kinldy explore the power of react hooks. PROGRESSION 1 | UPDATE STATE USING The following piece of code is written inside UseState.jsx componenet. This component will be rendered inside App.jsx. The following piece of code displays ascan be used to update an element. Free feel to copy this code, and"
      );
    } else {
      setpara(" ");
    }
  }

  return (
    <>
      <button onClick={handler}>content</button>
      <p>{para}</p>
    </>
  );
}
export default Para1;
