import { FaTimes } from "react-icons/fa";

const QRImg = ({ qrText, setIsShowQR }) => {
  return (
    <div className="qr-img-overlay">
      <div className="qr-img">
        <img src={qrText} alt="QR" />
        <button className="btn-close" onClick={() => setIsShowQR(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default QRImg;
