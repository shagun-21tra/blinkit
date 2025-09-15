import React, { useEffect } from "react";

function Alert({ type, message, onClose, autoHide = true, duration = 3000 }) {
  if (!message) return null; // don't render if no message

  // Auto hide after duration
  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, autoHide, duration, onClose]);

  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      {message}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
}

export default Alert;
