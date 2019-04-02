import * as React from 'react';
import { PieChart, Pie, Cell, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const DashboardComponent = () => {
    const data = [{ name: 'Group A', value: 1 }];
    const BACKGROUNDCOLORS = ['#000'];
    const COLORS = ['#0088FE'];
    const barData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    return (
        <div className="container">
            <div className="row col-sm-12 col-md-12 col-lg-12">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <BarChart
                        width={500}
                        height={300}
                        data={barData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <PieChart width={400} height={400}>
                        <Pie data={data} cx={120} cy={200} innerRadius={40} outerRadius={80} fill="#efefef" paddingAngle={-1} dataKey="value">
                            {data.map((_entry, index) => (
                                <Cell key={`cell-${index}`} fill={BACKGROUNDCOLORS[index % BACKGROUNDCOLORS.length]} />
                            ))}
                        </Pie>
                        <Pie data={data} cx={120} cy={200} innerRadius={40} outerRadius={80} fill="#efefef" paddingAngle={10} dataKey="value">
                            {data.map((_entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;
