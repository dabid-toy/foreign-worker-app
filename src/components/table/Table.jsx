import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
	const rows = [
		{
			id: 1143155,
			product: "Acer Nitro 5",
			img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "John Smith",
			date: "2008년 9월 5일",
			amount: 785,
			method: "North Thang Long Economic - Technical College 대학교 입학",
			status: "Approved",
		},
		{
			id: 2235235,
			product: "Playstation 5",
			img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Michael Doe",
			date: "2010년 6월 20일",
			amount: 900,
			method: "Civil & Industrial Electronic Technics 전공, 졸업",
			status: "Pending",
		},
		{
			id: 2342353,
			product: "Redragon S101",
			img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "John Smith",
			date: "2012년 8월 12일",
			amount: 35,
			method: "Electric Power University 대학교 입학",
			status: "Pending",
		},
		{
			id: 2357741,
			product: "Razer Blade 15",
			img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Jane Smith",
			date: "2014년 6월 20일",
			amount: 920,
			method: "Electricity Industry and Civil 전공, 졸업",
			status: "Approved",
		},
		{
			id: 2342355,
			product: "ASUS ROG Strix",
			img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
			customer: "Harold Carol",
			date: "2015년 3월",
			amount: 2000,
			method: "'Hai Van Building Construction and Investment Company Limited 근무",
			status: "Pending",
		},
	];
	return (
		<TableContainer component={Paper} className="table">
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="tableCell">일자</TableCell>
						<TableCell className="tableCell">내용</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>

							<TableCell className="tableCell">{row.date}</TableCell>
							<TableCell className="tableCell">{row.method}</TableCell>

						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;
