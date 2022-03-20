
import { Schema, model } from "mongoose";
import { ICustomer } from "../types/types";
import Validator from "validator";

const customerSchema = new Schema<ICustomer>({
  EmailAddress: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: [true, "please provide a unique email"],
  },
  FullName: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  BearsFee: {
    type: Boolean,
    default: false,
  },
});

const Customer = model("Customer", customerSchema);
export default Customer;