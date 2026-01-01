const ContractModal = ({ isOpen, onClose, license }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{license.title} Contract Details</h2>
        <hr />
        <div className="contract-body">
          <p><strong>Delivery:</strong> {license.contractDetails.delivery}</p>
          <p><strong>Term:</strong> {license.contractDetails.term}</p>
          <p><strong>Rights:</strong> {license.contractDetails.rights}</p>
          <p><strong>Usage:</strong> {license.contractDetails.usage}</p>
          <p><strong>Ownership:</strong> {license.contractDetails.ownership}</p>
          <p><strong>Publishing:</strong> {license.contractDetails.publishing}</p>
        </div>
        <p className="legal-disclaimer">
          * This is a summary. Full legal terms apply upon purchase[cite: 63, 172].
        </p>
      </div>
    </div>
  );
};

export default ContractModal;