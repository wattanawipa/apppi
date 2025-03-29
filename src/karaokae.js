import React, { useState } from "react";

function Karaoke() {
  const [hours, setHours] = useState(""); 
  const [studentCard, setStudentCard] = useState(null); 
  const [total, setTotal] = useState(""); 

  const calculateCost = () => {
    if (!hours || parseInt(hours) <= 0) {
      alert("กรุณากรอกจำนวนชั่วโมง");
      return;
    }
    let rate = studentCard ? 80 : 120;
    setTotal(hours * rate + " บาท");
  };

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <table border="1" style={{ marginTop: "10px", marginLeft: "10px" }}>
        <tbody>
          <tr>
            <td colSpan="2" style={{ textAlign: "center", fontWeight: "bold" }}>
              ร้านคาราโอเกะ
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="karaokeType"
                onChange={() => setStudentCard(false)}
              />{" "}
              ไม่มีบัตรนักศึกษา (ชั่วโมงละ 120 บาท)
              <br />
              <input
                type="radio"
                name="karaokeType"
                onChange={() => setStudentCard(true)}
              />{" "}
              มีบัตรนักศึกษา (ชั่วโมงละ 80 บาท)
              <br />
              <br />
              จำนวนชั่วโมง:{" "}
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={calculateCost}>คิดเงิน</button>
      <br />
      รวมเป็นเงินทั้งสิ้น ={" "}
      <input type="text" value={total} readOnly /> บาท
    </div>
  );
}

export default Karaoke;
