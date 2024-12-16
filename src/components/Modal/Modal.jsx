import Modal from 'react-modal';

Modal.setAppElement('#root'); 

export const ConfirmationModal = ({ isOpen, onClose, onConfirm, contactName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirm Deletion"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '8px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete {contactName}?</p>
      <button onClick={onConfirm} style={{ marginRight: '10px' }}>Yes</button>
      <button onClick={onClose}>No</button>
    </Modal>
  );
};