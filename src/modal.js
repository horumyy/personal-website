export const Modal = ({ show, onClose }) => {
  return (
    <div
      className={`fixed left-[0] top-[0] right-[0] bottom-[0] bg-[rgba(0,0,0,0.5) flex items-center justify-center backdrop-brightness-50 transition-all duration-700 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="p-4 modal-content bg-gray-200 w-[60%] sm:w-[20%] drop-shadow-2xl rounded-lg">
        <div className="modal-header">
          <h1 className="modal-title">Thank you</h1>
        </div>
        <div className="modal-body">For visiting my page!🥰</div>
        <div className="modal-footer">
          <hr
            style={{
              backgroundColor: "#808080",
              height: 1,
              padding: 0.5,
              margin: 3,
            }}
          />
          <button onClick={onClose} className="text-blue-500">
            Buh-bye!
          </button>
        </div>
      </div>
    </div>
  );
};
