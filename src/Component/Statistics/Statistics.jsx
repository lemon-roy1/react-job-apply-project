import { CartesianGrid, Legend, Line, LineChart,Tooltip, XAxis, YAxis } from "recharts";
import Chart from "./LinkChart/Chart";

const data = [
    {
        name: 'Physics',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Chemistry',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Biology',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Mathematics',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Bangla',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'English',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'science',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const Statistics = () => {

    return (

        <div className="grid gap-2 grid-cols-2" >
            <div className="m-6">
                <LineChart
                    width={500}
                    height={400}
                    data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8e6ae9" />
                    <Line type="monotone" dataKey="uv" stroke="#6673d2" />
                </LineChart>
            </div>
            <div>
                <Chart/>
            </div>
        </div>
    );
}




export default Statistics;