import { useEffect, useRef, useState } from "react";
import "./hooks.css";

const RefHook = () => {
  const [cardNumber, setcardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("")

  const cardRef = useRef()

  useEffect(() => {
      cardRef.current.focus()
  },[])

  return (
    <div className="payment">
      <h3>Credit Card Number</h3>
      <input
      ref={cardRef}
        type="text"
        value={cardNumber}
        maxLength={12}
        onChange={(val) => setcardNumber(val.target.value)}
      />

      <h3>Expiry Date</h3>
      <input
        type="text"
        value={expiryDate}
        maxLength={2}
        onChange={(val) => setExpiryDate(val.target.value)}
      />

      <h3>CVV</h3>
      <input
        type="text"
        value={cvv}
        maxLength={3}
        onChange={(val) => setCvv(val.target.value)}
      />

      <button className="submitBtn">Submit</button>

      <h3>OTP Section</h3>
      <div className="opt_section">
        <input maxLength={1} className="otpF1" type="text" />
        <input maxLength={1} className="otpF1 l-spacing" type="text" />
        <input maxLength={1} className="otpF1 l-spacing" type="text" />
        <input maxLength={1} className="otpF1 l-spacing" type="text" />
        <input maxLength={1} className="otpF1 l-spacing" type="text" />
      </div>
      
    </div>
  );
};

export default RefHook;
