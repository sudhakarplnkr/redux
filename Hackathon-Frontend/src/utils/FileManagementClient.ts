/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.0.0 (NJsonSchema v9.12.2.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export interface FileParameter {
  data: any;
  fileName: string;
}

export class FileManagementClient {
  private http: {
    fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
  };
  private baseUrl: string;
  protected jsonParseReviver:
    | ((key: string, value: any) => any)
    | undefined = undefined;

  constructor(
    baseUrl?: string,
    http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
  ) {
    this.http = http ? http : <any>window;
    this.baseUrl = baseUrl ? baseUrl : '';
  }
  upload(apiUrl: string, id: string, postedFile: FileParameter | null | undefined): Promise<string | null> {
    const url_ = `${this.baseUrl}${apiUrl}/${id}`;

    const content_ = new FormData();
    if (postedFile !== null && postedFile !== undefined)
      content_.append(
        'postedFile',
        postedFile.data,
        postedFile.fileName ? postedFile.fileName : 'Associate'
      );
    
    let options_ = <RequestInit>{
      body: content_,
      method: 'POST',
      headers: {
        Accept: 'application/json'
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processUpload(_response);
    });
  }
  protected processUpload(response: Response): Promise<string | null> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then(_responseText => {
        let result200: any = null;
        let resultData200 =
          _responseText === ''
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : <any>null;
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then(_responseText => {
        throw 'An unexpected server error occurred.';
      });
    }
    return Promise.resolve<string | null>(<any>null);
  }
}
