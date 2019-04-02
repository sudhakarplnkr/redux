import * as React from 'react';
import { CSVDownload } from 'react-csv';

const ReportContainer = () => {
  const csvData = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com']
  ];
  return (
    <div className="container">      
      <CSVDownload data={csvData} target="_blank" />
    </div>
  );
};

export default ReportContainer;
