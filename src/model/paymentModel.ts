import { Schema, model } from "mongoose";
import { IPayment } from "../types/types";

const paymentSchema = new Schema<IPayment>({
  Issuer: {
    type: String,
    required: [true, "Please provide your Issuer"],
  },
  Brand: {
    type: String,
  },
  Number: {
    type: String,
    required: [true, "Please provide the entity number on the masked pan of your card"],
  },
  SixID: {
    type: Number,
    length: 6,
  },
  Type: {
    type: String,
    enum: ["CREDIT-CARD", "DEBIT-CARD", "BANK-ACCOUNT", "USSD", "WALLET-ID"],
  },
  Country: {
    type: String,
    required: [true, "Please provide your Country"],
  },
});
const Payment = model("Payment", paymentSchema);
export default Payment;
