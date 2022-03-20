import { Request, Response, NextFunction } from "express";
import Transaction from "../model/transactionModel";
import ResponseStatus from "../middleware/response";
import Fees from "../model/feeModel";

export const postTransaction = async (req: Request, res: Response) => {
  //   const responseStatus = new ResponseStatus();
  try {
    //   console.log('ererere');
    const { CurrencyCountry } = req.body;
    const Type = req.body.PaymentEntity.Type;
    const Brand = req.body.PaymentEntity.Brand;
    let Status: string = "";

    if (req.body.PaymentEntity.Country === "NG" && req.body.CurrencyCountry === "NG") {
      Status = "LOCL";
    } else if (req.body.PaymentEntity.Country !== 'NG' || req.body.CurrencyCountry!== 'NG') {
      Status = "INTL";
    }
    else{
        Status = '*'
    }
    // console.log(Locale)
    const data = (await Fees.find({ Brand, Type, Status }).select({ Charges: 1, FlatRate: 1 }))[0];
    let rate = req.body.Amount * (+data.Charges / 100) + req.body.Amount + data.FlatRate;
    const newPost = new Transaction(req.body);
    const config = await newPost.save();
    res.send({
      AppliedFeeID: config._id,
      AppliedFeeValue: req.body.Amount * (+data.Charges / 100),
      ChargeAmount: rate,
      SettlementAmount: req.body.Amount,
    });
    // res.send(data);
  } catch (err: any) {
    // responseStatus.setError(400, "error computing charges");
    return res.send("vfggfgfff");
  }
};
