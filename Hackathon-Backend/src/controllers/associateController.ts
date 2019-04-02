import { Request, Response } from 'express';
import { Associate } from '../models/associate';
import AssociateService from '../services/associateService';
import readXls from '../services/fileHelper';

export class AssociateController {
  public get(request: Request, response: Response) {
    AssociateService.get(request.params.associateId, (associate: Associate) => {
      response.json(associate);
    });
  }

  public getAll(_request: Request, response: Response) {
    AssociateService.getAll((associates: Associate[]) => {
      response.json(associates);
    });
  }

  public add(request: Request, response: Response) {
    AssociateService.add(request.body, (results: any[]) => {
      const error = results.find((result: any) => result.error);
      response.json({ error: error.error });
    });
  }

  public bulkAdd(request: Request, response: Response) {
    const associates: Associate[] = readXls<Associate>(request.files);
    AssociateService.bulkAdd(request.params.eventId, associates, (results: any[]) => {
      const errors = results.filter((result: any) => result.error);
      response.json({ error: errors });
    });
  }

  public update(request: Request, response: Response) {
    AssociateService.update(request.params.associateId, request.body, () => {
      response.json({ message: 'Successfully updated associate!' });
    });
  }

  public delete(request: Request, response: Response) {
    AssociateService.delete(request.params.contactId, () => {
      response.json({ message: 'Successfully deleted associate!' });
    });
  }
}
