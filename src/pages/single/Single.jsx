import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Viewchart from "../../components/viewchart/Viewchart";
import List from "../../components/table/Table";
import ProfileImg from "../../img/single-profile.jpg";
const Single = () => {
	return (
		<div className="single">
			<Sidebar />
			<div className="singleContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<h1 className="title">인력 정보</h1>
						<div className="item">
							<img
								src={ProfileImg}
								alt=""
								className="itemImg"
							/>
							<div className="details">
								<h1 className="itemTitle">NGUYEN VAN THOAN</h1>
								<div className="detailItem">
									<span className="itemKey">생년월일</span>
									<span className="itemValue">1990.01.18</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">전공:</span>
									<span className="itemValue">산업전기</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">주소:</span>
									<span className="itemValue">
										Yen Lo Village – Cam Yen Commune – Thach That District – Hanoi
									</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">회사경력:</span>
									<span className="itemValue">전기,기계수리</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Viewchart aspect={3 / 1} title="최근 조회현황 ( 직전 6 개월)" />
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">이력 상세</h1>
					<List />
				</div>
			</div>
		</div>
	);
};

export default Single;
