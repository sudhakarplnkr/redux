export const BASE_URL = 'http://ec2-54-198-183-198.compute-1.amazonaws.com:3010/';
export const API_URL = `${BASE_URL}api/`;

declare global {
    // tslint:disable-next-line:interface-name
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}