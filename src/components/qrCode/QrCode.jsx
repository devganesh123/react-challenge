import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const QrCode = () => {
  const [qrValue, setQrValue] = useState("");
  const [qrResponse, setQrResponse] = useState("");

  // API Call
  const API_URI =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
  const generateQrCodeHandler = () => {
    setQrResponse(qrValue);
    setQrValue("");
  };
  return (
    <>
      <div className="qr-box">
        <Typography className="qr-title" sx={{ mb: 1.5 }}>
          Enter your text or URL
        </Typography>
        <div>
          <input
            type="text"
            onChange={(event) => {
              setQrValue(event.target.value);
            }}
            value={qrValue}
          />
        </div>
        {qrResponse && (
          <img
            src={`${API_URI}${qrResponse}`}
            alt=""
            style={{ marginTop: "10px" }}
          />
        )}
        <Typography sx={{ mt: 1.5 }}>
          <button onClick={generateQrCodeHandler}>Generate QR Code</button>
        </Typography>
      </div>
    </>
  );
};

export default QrCode;
