import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <p>Name: {name}</p>

        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>
        <p>Age: {age}</p>

        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
          />
        </label>
        <p>Comment: {comment}</p>

        <p>Shipping:</p>
        <label>
          <input
            type="radio"
            value="Pickup"
            checked={shipping === "Pickup"}
            onChange={(e) => setShipping(e.target.value)}
          />
          Pickup
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={(e) => setShipping(e.target.value)}
          />
          Delivery
        </label>
        <p>Shipping: {shipping}</p>

        <label>
          Payment Method:
          <select value={payment} onChange={(e) => setPayment(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </label>
        <p>Payment: {payment}</p>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {/* Dialog box */}
      {showDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <h3>Form Submitted!</h3>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Comment:</strong> {comment}
            </p>
            <p>
              <strong>Shipping:</strong> {shipping}
            </p>
            <p>
              <strong>Payment:</strong> {payment}
            </p>
            <button onClick={closeDialog} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
