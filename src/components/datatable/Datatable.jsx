import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows, userColumns2, userRows2 } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
	const [data, setData] = useState(userRows2);



	const actionColumn = [
		{
			field: "action",
			headerName: "상세",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test" style={{ textDecoration: "none" }}>
							<div className="viewButton">더보기</div>
						</Link>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">
				인력 찾기

			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns2.concat(actionColumn)}
				pageSize={20}
				rowsPerPageOptions={[20]}
			/>
		</div>
	);
};

export default Datatable;
