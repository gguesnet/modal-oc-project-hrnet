import React, { useState } from "react";
import Modal from "./lib";

function App() {
  const [modalShowing, setModalShowing] = useState(false);

  function handleClick() {
    setModalShowing(!modalShowing);
  }

  return (
    <div>
      <Modal
        title="Success!"
        text="Employee has been successfully added!"
        button="Okay!"
        toggleOpen={handleClick}
        isOpen={modalShowing}
      />
      <button onClick={handleClick}>Show Modal</button>
    </div>
  );
}

export default App;
