import request from 'supertest';
import app from '../app';

describe('Configuration', () => {
    const postData = {
      Status: "LOCL",
      Type: "CREDIT-CARD",
      Brand: "MASTERCARD",
      Charges: 0.5,
      FlatRate: 20,
    };

    const data = {
      ID: 91203,
      Amount: 5000,
      Currency: "NGN",
      CurrencyCountry: "NG",
      Customer: {
        ID: 2211232,
        EmailAddress: "anonimized29900@anon.io",
        FullName: "Abel Eden",
        BearsFee: true,
      },
      PaymentEntity: {
        ID: 2203454,
        Issuer: "GTBANK",
        Brand: "MASTERCARD",
        Number: "5301917777772903",
        SixID: 530191,
        Type: "CREDIT-CARD",
        Country: "NG",
      },
    };

    it('stores configuration', async () => {
        const response = await request(app).post('/fee').send(postData)
        expect(response.statusCode).toBe(200)
        expect(response.body.status).toBe('ok')
    })
    it('compute transaction fee', async () => {
        const response = await request(app).post("/compute-transaction-fee").send(data)
        expect(response.statusCode).toBe(200)
        expect(response.body.hasOwnProperty("ChargeAmount")).toBe(true);
    })
})