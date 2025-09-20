import React from "react";
import { useState } from "react";

interface CheckoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: { name: string; address: string }) => void;
}

function CheckoutDialog({ isOpen, onClose, onConfirm }: CheckoutDialogProps) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  if (!isOpen) return null; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm({ name, address });
    setName("");
    setAddress("");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "black", padding: "20px", borderRadius: "8px", width: "400px" }}>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name:</label><br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", padding: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Address:</label><br />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              style={{ width: "100%", padding: "5px" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutDialog;
