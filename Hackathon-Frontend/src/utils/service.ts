import { Request } from '../utils/RequestExtension';
import { FileManagementClient } from './FileManagementClient';

class Service<T> {
    public constructor(private service: new (baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) => T) {
    }

    public new(): T {
        return new this.service(Request.baseUrl, Request.http);
    }
}

export default {
    FileManagementClient: new Service(FileManagementClient).new()
};
