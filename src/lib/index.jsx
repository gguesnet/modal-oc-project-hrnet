import React from "react";
import PropTypes from "prop-types";

export default function Modal({ title, text, button, toggleOpen, isOpen }) {
  return (
    <dialog id="demo-modal" open={isOpen}>
      <h3 className="modal-header">{title}</h3>
      <div className="modal-body">
        <p>{text}</p>
      </div>
      <footer className="modal-footer">
        <button type="button" onClick={() => toggleOpen(false)}>
          {button}
        </button>
      </footer>
      <button className="close" type="button" onClick={() => toggleOpen(false)}>
        ×
      </button>
    </dialog>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};
