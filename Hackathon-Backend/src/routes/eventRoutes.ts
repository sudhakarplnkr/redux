import { Router } from 'express';
import { EventController } from '../controllers/eventController';

export class EventRoutes {
    private readonly eventController: EventController;

    public constructor() {
        this.eventController = new EventController();
    }

    public routes(application: Router): void {
        application
            .route('/event')
            .get(this.eventController.getAll)
            .post(this.eventController.add);
        application.route('/bulk-event/:id').post(this.eventController.bulkAdd);
        application.route('/post-event-update').post(this.eventController.postEventUpdate);
        application.route('/default-values').get(this.eventController.getEventDefaultValues);
        application.route('/favorite-event').get(this.eventController.getFavuriteEvents);
        application.route('/favorite-event').post(this.eventController.addFavuriteEvent);
        application.route('/favorite-event/:eventId').delete(this.eventController.removeFavuriteEvent);
        application.route('/my-event').get(this.eventController.getMyEvents);
        application
            .route('/event/:eventId')
            .get(this.eventController.get)
            .put(this.eventController.update)
            .delete(this.eventController.delete);
    }
}
