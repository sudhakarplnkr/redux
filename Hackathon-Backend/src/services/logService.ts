import { Log, LogModel } from '../models/log';

class LogService {
    public log(log: Log, callback: any): void {
        LogModel.create(log)
            .then(() => {
                callback('Error logged in server');
            })
            .catch(() => {
                callback('Error not logged in server');
            });       
    }

    public associateLogin(associateId: number, callback: any): void {
        callback(null, { AssociateId: associateId });
    }
}

export default new LogService();
