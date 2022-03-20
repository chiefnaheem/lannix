import Fees from "../model/feeModel";

export const seedFeeCharges = [
  {
    Status: "*",
    Type: "*",
    Brand: "*",
    Charges: "1.4",
    FlatRate: 0,
  },
  {
    Status: "INTL",
    Type: "CREDIT-CARD",
    Brand: "MASTERCARD",
    Charges: "3.8",
    FlatRate: 0,
  },
  {
    Status: "INTL",
    Type: "CREDIT-CARD",
    Brand: "*",
    Charges: "5.8",
    FlatRate: 0,
  },
  {
    Status: "LOCL",
    Type: "USSD",
    Brand: "MTN",
    Charges: "0.5",
    FlatRate: 20,
  },
];
export function seedFeeData() {
  console.log("dfdfdfd");

  seedFeeCharges.map(async (val) => {
    let output = await Fees.findOneAndUpdate(
      {
        Status: val.Status,
        Type: val.Type,
        Brand: val.Brand,
        Charges: val.Charges,
        FlatRate: val.FlatRate,
      },
      val,
      {
        upsert: true,
      }
    );
  });
  console.log('finished loading data');
}
