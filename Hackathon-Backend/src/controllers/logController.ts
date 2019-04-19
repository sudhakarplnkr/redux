import { Request, Response } from 'express';
import logService from '../services/logService';
export class LogController {
    public log(request: Request, response: Response) {
        logService.log(request.body, (result: any) => {
            response.json(result);
        });
    }
}
