import "./viewchart.scss";
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "5월", 조회수: 120 },
	{ name: "6월", 조회수: 210 },
	{ name: "7월", 조회수: 80 },
	{ name: "8월", 조회수: 160 },
	{ name: "9월", 조회수: 90 },
	{ name: "10월", 조회수: 170 },
];
const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${label}`}</p>
				<p className="desc">{`${payload[0].value}회`}</p>
			</div>
		);
	}

	return null;
};


const Chart = ({ aspect, title }) => {
	return (
		<div className="chart">
			<div className="title">{title}</div>
			<ResponsiveContainer width="100%" aspect={aspect}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					<CartesianGrid strokeDasharray="3 3" className="chartGrid" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="조회수"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
