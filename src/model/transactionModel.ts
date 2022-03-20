import { Schema, model } from "mongoose";
import { ITransaction } from "../types/types";
import { uuid } from "uuidv4";

const transactionSchema = new Schema<ITransaction>(
  {
    Amount: {
      type: String,
      minlength: 0,
      required: true,
    },
    Currency: {
      type: String,
      default: "NGN",
    },
    CurrencyCountry: {
      type: String,
      required: true,
    },
    Customer:Object,
    PaymentEntity: Object,
  },
  {
    timestamps: true,
  }
);
const Transaction = model("Transaction", transactionSchema);
export default Transaction;

let a=9+5


// {
//     "FeeConfigurationSpec": "LNPY1221 NGN * *(*) : APPLY PERC 1.4
//     LNPY1222 NGN INTL CREDIT-CARD(VISA) : APPLY PERC 5.0\n
//     LNPY1223 NGN LOCL CREDIT-CARD(*) : APPLY FLAT_PERC 50:1.4\n
//     LNPY1224 NGN * BANK-ACCOUNT(*) : APPLY FLAT 100\n
//     LNPY1225 NGN * USSD(MTN) : APPLY PERC 0.55"
// }

// if (!currencyCountry && !type && !issuer) {
//     amount*1.4
// }

// if (currencyCountry !=='NG' && type==='CREDIT-CARD' && issuer==='VISA') {
//     amount *5.0
// }

// if (currencyCountry==='NG' && type==='CREDIT-CARD' && !issuer) {

// }