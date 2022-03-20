import { Document, Schema } from 'mongoose';
export interface ICustomer {
    ID: string;
    EmailAddress: string;
    FullName: string;
    BearsFee: boolean;
}

export interface IPayment{
    ID: string;
    Issuer: string;
    Brand: string;
    Number: string;
    SixID: number
    Type: string
    Country: string;
}

export interface ITransaction {
    ID: string;
    Amount: string;
    Currency: string;
    CurrencyCountry: string;
    Customer: ICustomer;
    PaymentEntity: IPayment;
    AppliedFeeID: string;
    AppliedFeeValue: number;
    ChargeAmount: number;
    SettleAmount: number;
}
export interface IFees extends Document{
  Status: string;
  Type: string;
  Brand: string;
  Charges: string;
  FlatRate: number;
  Currency: string;
}
export type ResponseData = Record<string, any> | Record<string, any>[];