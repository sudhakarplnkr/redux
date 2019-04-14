import * as React from 'react';
import { CSVDownload } from 'react-csv';
import { IEvent } from '../models/Event';

const ReportContainer = ({ events }: { events: IEvent[] }) => {
    return <div className="container">{events.length > 0 && <CSVDownload data={events} target="_blank" />}</div>;
};

export default ReportContainer;
