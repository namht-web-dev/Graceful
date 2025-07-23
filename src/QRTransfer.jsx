import { useState } from "react";
import { bankCodeData } from "./data.js";

const QRTransfer = () => {
  const [qrText, setQRText] = useState(
    "https://img.vietqr.io/image/970436-9981510747-qr_only.png"
  );
  // const [accountNumber, setAccountNumber] = useState("");
  // const [amount, setAmount] = useState(0);
  // const [description, setDescription] = useState("");
  const [transferInfo, setTransferInfo] = useState({
    accountNumber: "9981510747",
    amount: 0,
    description: "",
    bankCode: "970436",
  });
  const onChangeInputValue = (e) => {
    setTransferInfo({ ...transferInfo, [e.target.name]: e.target.value });
  };
  const genQRText = (e) => {
    e.preventDefault();
    setQRText(
      `https://img.vietqr.io/image/${transferInfo.bankCode}-${transferInfo.accountNumber}-qr_only.png?amount=${transferInfo.amount}&addInfo=${transferInfo.description}`
    );
  };
  return (
    <section className="qr-container">
      <div className="qr-img">
        <img src={qrText} alt="QR" />
      </div>
      <form className="form-container" onSubmit={genQRText}>
        <div className="form-control">
          <label className="form-label" htmlFor="bankCode">
            Mã ngân hàng
          </label>
          <select
            name="bankCode"
            id="bankCode"
            onChange={onChangeInputValue}
            defaultValue="970436"
          >
            {bankCodeData.map((bank) => {
              const { bank_code, ma_nh_dt, ten_nh } = bank;
              return (
                <option key={ma_nh_dt} value={bank_code}>
                  {ma_nh_dt} - {ten_nh.trim()}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="accountNumber">
            Số tài khoản
          </label>
          <input
            onChange={onChangeInputValue}
            className="form-input"
            type="text"
            name="accountNumber"
            id="accountNumber"
            value={transferInfo.accountNumber}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="amount">
            Số tiền
          </label>
          <input
            onChange={onChangeInputValue}
            className="form-input"
            type=""
            name="amount"
            id="amount"
            value={transferInfo.amount}
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="description">
            Nội dung ck
          </label>
          <input
            onChange={onChangeInputValue}
            className="form-input"
            type="text"
            name="description"
            id="description"
            value={transferInfo.description}
          />
        </div>

        <div className="btn-container">
          <button type="submit" className="btn btn-submit">
            Tạo QR code
          </button>
        </div>
      </form>
    </section>
  );
};

export default QRTransfer;
