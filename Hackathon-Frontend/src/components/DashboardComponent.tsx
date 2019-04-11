import * as React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { IDashboardProps } from '../models/Dashboard';

const DashboardComponent = (props: IDashboardProps) => {
    return (
        <div className="container">
            <div className="row col-sm-12 col-md-12 col-lg-12">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <h2>
                        <small>Registered Associates for Events</small>
                    </h2>
                    <hr />
                    <BarChart
                        width={500}
                        height={300}
                        data={props.registeredAssociate}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="EventTitle" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="TotalRegisteredAssociate" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;
