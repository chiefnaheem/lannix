import { Schema, model } from "mongoose";
import { IFees } from "../types/types";

const feeSchema = new Schema<IFees>({
  Status: {
    type: String,
  },
  Type: {
    type: String,
    default: "*",
  },
  Brand: {
    type: String,
    default: "*",
  },
  Charges: {
    type: String,
  },
  FlatRate: {
    type: Number,
  },
  Currency: {
    type: String,
    default: "NGN",
  },
});

const Fees = model("Fees", feeSchema);
export default Fees;

// LNPY1221 NGN LOCL CREDIT-CARD(*) : APPLY PERC 1.4
// LNPY1222 NGN INTL CREDIT-CARD(MASTERCARD) : APPLY PERC 3.8
// LNPY1223 NGN INTL CREDIT-CARD(*) : APPLY PERC 5.8
// LNPY1224 NGN LOCL USSD(MTN) : APPLY FLAT_PERC 20:0.5
// LNPY1225 NGN LOCL USSD(*) : APPLY FLAT_PERC 20:0.5

// if (!currencyCountry && !type && !issuer) {
//   amount * 1.4;
// }

// if (currencyCountry !== "NG" && type === "CREDIT-CARD" && issuer === "VISA") {
//   amount * 5.0;
// }

// if (currencyCountry === "NG" && type === "CREDIT-CARD" && !issuer) {
// }
