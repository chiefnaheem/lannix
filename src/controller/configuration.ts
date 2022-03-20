import { Request, Response, NextFunction } from "express";
import Fees from '../model/feeModel';
import ResponseStatus from "../middleware/response";

export const feeConfiguration = async (req: Request, res: Response) => {
    const responseStatus = new ResponseStatus();
    try{
        const newConfig = new Fees(req.body)
        const config = await newConfig.save()
        return res.json({status: 'ok'})
    }
    catch(err:any) {
        responseStatus.setError(400, "error posting the configuration");
        return responseStatus.send(res);
    }
};
