import React from 'react';

import './style.scss';

const ToOrderModal = ({
  show,
  onClose,
  onSubmit,
  title,
  children,
}) => (
  <>
    <div
      className="modal"
      style={{ display: show ? 'block' : 'none' }}
      onClick={onClose}
      onKeyUp={onClose}
      tabIndex={0}
      role="button"
      label="background"
    />
    <div className="modal_main" style={{ display: show ? 'flex' : 'none' }}>
      <div className="modal_header">{title}</div>
      <div className="modal_content">{children}</div>
      <div className="modal_footer">
        <button
          type="button"
          className="modal_btn modal_btn__sbm"
          onClick={onSubmit}
        >
          պատվիրել
        </button>
        <button
          type="button"
          className="modal_btn modal_btn__cls"
          onClick={onClose}
        >
          փակել
        </button>
      </div>
    </div>
  </>
);

export default ToOrderModal;
