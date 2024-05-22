import React, { useState, useEffect } from "react";

function FloatingNumber({ amount, type, x, y, duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeoutId);
  }, [duration]);

  const numberClass = `floatingNumber ${type} ${visible ? "show" : "hide"}`;

  return (
    <div className={numberClass} style={{ left: x, top: y }}>
      {type === "gain" ? "+" : "-"}
      {amount}
    </div>
  );
}

export default FloatingNumber;
