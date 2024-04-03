import React from "react";
import CommonTitle from "../../components/common/CommonTitle";
import QrCode from "../../components/qrCode/QrCode";

const QrCodeGenerator = () => {
  return (
    <div>
      <CommonTitle day={16} title="Notes Taking App"></CommonTitle>
      <QrCode></QrCode>
    </div>
  );
};

export default QrCodeGenerator;
