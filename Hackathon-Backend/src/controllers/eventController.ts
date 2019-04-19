import { Request, Response } from 'express';
import { Beneficiary } from '../models/event/beneficiary';
import { Council } from '../models/event/council';
import { Event } from '../models/event/event';
import { EventCategory } from '../models/event/eventCategory';
import { EventDefaultValues } from '../models/event/eventDefaultValues';
import { Project } from '../models/event/project';
import { TransportBoardingType } from '../models/event/transportBoardingType';
import EventService from '../services/eventService';
import readXls from '../services/fileHelper';
import userClaimFactory from '../services/userClaimFactory';

export class EventController {
    public get(request: Request, response: Response) {
        EventService.get(request.params.eventId, (event: Event) => {
            response.json(event);
        });
    }

    public getAll(request: Request, response: Response) {
        EventService.getAll(userClaimFactory.getUserId(request), (events: Event[]) => {
            response.json(events);
        });
    }

    public getMyEvents(request: Request, response: Response) {
        EventService.getMyEvents(userClaimFactory.getAssociateId(request), (events: Event[]) => {
            response.json(events);
        });
    }

    public add(request: Request, response: Response) {
        EventService.add(request.body, (event: Event) => {
            response.json(event);
        });
    }

    public postEventUpdate(request: Request, response: Response) {
        EventService.postEventUpdate(request.body, (event: Event) => {
            response.json(event);
        });
    }

    public bulkAdd(request: Request, response: Response) {
        const events: Event[] = readXls<Event>(request.files);
        EventService.bulkAdd(events, (results: any[]) => {
            const errors = results.filter((result: any) => result.error);
            response.json({ error: errors });
        });
    }

    public update(request: Request, response: Response) {
        EventService.update(request.params.eventId, request.body, () => {
            response.json({ message: 'Successfully updated event!' });
        });
    }

    public delete(request: Request, response: Response) {
        EventService.delete(request.params.eventId, () => {
            response.json({ message: 'Successfully deleted event!' });
        });
    }

    public getEventDefaultValues(_request: Request, response: Response) {
        EventService.getEventDefaultValues((eventDefaultValues: EventDefaultValues) => {
            response.json(eventDefaultValues);
        });
    }

    public addBeneficiary(request: Request, response: Response) {
        EventService.addBeneficiary(request.body, (beneficiary: Beneficiary) => {
            response.json(beneficiary);
        });
    }

    public addCouncil(request: Request, response: Response) {
        EventService.addCouncil(request.body, (council: Council) => {
            response.json(council);
        });
    }

    public addProject(request: Request, response: Response) {
        EventService.addProject(request.body, (project: Project) => {
            response.json(project);
        });
    }

    public addEventCategory(request: Request, response: Response) {
        EventService.addEventCategory(request.body, (eventCategory: EventCategory) => {
            response.json(eventCategory);
        });
    }

    public addTransportBoardingType(request: Request, response: Response) {
        EventService.addTransportBoardingType(request.body, (transportBoardingType: TransportBoardingType) => {
            response.json(transportBoardingType);
        });
    }

    public getFavuriteEvents(request: Request, response: Response) {
        EventService.getFavuriteEvents(userClaimFactory.getUserId(request), (events: Event[]) => {
            response.json(events);
        });
    }

    public addFavuriteEvent(request: Request, response: Response) {
        EventService.addFavuriteEvent(userClaimFactory.getUserId(request), request.body.eventId, (events: Event[]) => {
            response.json(events);
        });
    }

    public removeFavuriteEvent(request: Request, response: Response) {
        EventService.removeFavuriteEvent(userClaimFactory.getUserId(request), request.params.eventId, () => {
            response.json(true);
        });
    }
}
