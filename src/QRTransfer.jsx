import { useState } from "react";
import { bankCodeData } from "./data.js";
import QRImg from "./QRImg.jsx";
import FormInput from "./FormInput.jsx";

const QRTransfer = () => {
  const [qrText, setQRText] = useState(
    "https://img.vietqr.io/image/970436-9981510747-qr_only.png"
  );
  const [isShowQR, setIsShowQR] = useState(false);
  // const [accountNumber, setAccountNumber] = useState("");
  // const [amount, setAmount] = useState(0);
  // const [description, setDescription] = useState("");
  const [transferInfo, setTransferInfo] = useState({
    accountNumber: "9981510747",
    amount: "",
    description: "",
    bankCode: "970436",
  });
  const onChangeInputValue = (e) => {
    const name = e.target.name;
    const input = e.target.value;

    let rawValue = input;
    if (name === "amount") {
      rawValue = input
        .replace(/\./g, ",")
        .replace(/,/g, "")
        .replace(/[^\d.-]/g, "");
    }

    setTransferInfo((prev) => ({
      ...prev,
      [name]: rawValue,
    }));
  };
  const { accountNumber, amount, description, bankCode } = transferInfo;
  const genQRText = (e) => {
    e.preventDefault();
    setQRText(
      `https://img.vietqr.io/image/${bankCode}-${accountNumber}-qr_only.png?amount=${amount}&addInfo=${description}`
    );
    setIsShowQR(true);
  };
  const formatNumber = (numStr) => {
    if (numStr === "" || isNaN(numStr)) return 0;
    return Number(numStr).toLocaleString("en-US").replace(/,/g, ".");
  };

  return (
    <section className="qr-container">
      {isShowQR && <QRImg qrText={qrText} setIsShowQR={setIsShowQR} />}
      <form className="form-container" onSubmit={genQRText}>
        <div className="form-control">
          <label className="form-label" htmlFor="bankCode">
            Mã ngân hàng
          </label>
          <select
            name="bankCode"
            id="bankCode"
            onChange={onChangeInputValue}
            defaultValue={bankCode}
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
        <FormInput
          name="accountNumber"
          value={accountNumber}
          label="Số tài khoản"
          onChangeInputValue={onChangeInputValue}
        />

        <FormInput
          name="amount"
          value={formatNumber(amount)}
          label=" Số tiền"
          onChangeInputValue={onChangeInputValue}
        />

        <FormInput
          name="description"
          value={description}
          label="Nội dung ck"
          onChangeInputValue={onChangeInputValue}
        />

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
