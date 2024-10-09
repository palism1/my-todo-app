interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // If the modal is not open, don't render anything

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <button onClick={onClose} style={closeButtonStyle}>X</button>
                {children}
            </div>
        </div>
    );
};

// Basic inline style for modal and overlay
const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const modalContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    maxWidth: '100%',
};

const closeButtonStyle: React.CSSProperties = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    float: 'right',
};