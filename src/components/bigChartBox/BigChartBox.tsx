import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import './bigChartBox.scss';

const data = [
    {
        name: 'Sun',
        visits: 4000,
        clicks: 2400,
        likes: 2400,
    },
    {
        name: 'Mon',
        visits: 3000,
        clicks: 1398,
        likes: 2210,
    },
    {
        name: 'Tue',
        visits: 2000,
        clicks: 3800,
        likes: 2290,
    },
    {
        name: 'Wed',
        visits: 2780,
        clicks: 3908,
        likes: 2400,
    },
    {
        name: 'Thu',
        visits: 1890,
        clicks: 4800,
        likes: 2000,
    },
    {
        name: 'Fri',
        visits: 2390,
        clicks: 3800,
        likes: 2181,
    },
    {
        name: 'Sat',
        visits: 3490,
        clicks: 4300,
        likes: 2500,
    },
];

export const BigChartBox = () => {
    return (
        <div className="bigChartBox">
            <h1>Revenue Analytics</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="visits"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                        <Area
                            type="monotone"
                            dataKey="clicks"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <Area
                            type="monotone"
                            dataKey="likes"
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
