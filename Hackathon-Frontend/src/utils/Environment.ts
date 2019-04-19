export const BASE_URL = 'http://ec2-54-198-183-198.compute-1.amazonaws.com:3010/';
export const API_URL = `${BASE_URL}api/`;
import * as jquery from 'jquery';
import Axios from 'axios';
declare global {
    // tslint:disable-next-line:interface-name
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
        jQuery: any;
        onerror: (message: string, url: string, line: number, column: number, error: any) => void;
    }
}

window.jQuery = jquery;
window.onerror = (message: any, url: string, line: number, column: number, error: any) => {
    const data = { Message: message, Url: url, Line: line, Column: column, Error: error };
    Axios.post(`${BASE_URL}log`, data).then((response: any) => {
        console.log(response.data);
    });    
};
