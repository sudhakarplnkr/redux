import * as xlsx from 'xlsx';

export default function readXls<T>(files: any): T[] {
    const file = files.postedFile['data'];
    const read = (sheet: xlsx.WorkSheet) => {
        const result: T[] = xlsx.utils.sheet_to_json(sheet);
        return result;
    };
    const workbook = xlsx.read(file);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return read(worksheet);
}
