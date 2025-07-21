import "./Modal.css";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    <div
      className="modal-overlay"
      onClick={() => {
        if (onClose) onClose();
      }}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => { if (onClose) onClose(); }}>
          ×
        </button>
        <div className="modal-header">
          <h2>{title} 🐾</h2>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}