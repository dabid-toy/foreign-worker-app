import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import RequireAuth from './components/RequireAuth';
function App() {
	const { currentUser, loading } = useContext(AuthContext);

	if (loading) return <div className="flex items-center justify-center">Loading...</div>;

	const ProtectedRoute = ({ children }) => {


		if (!currentUser) {
			return <Navigate to="/login" />;
		}

		return children
	};


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">

					<Route
						index
						element={
							<ProtectedRoute>
								<List />
							</ProtectedRoute>

						}
					/>
					<Route element={<RequireAuth />}>
						<Route path="users2" element={<List />} />
					</Route>

					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="users">
						<Route index element={<List />} />
						<Route path=":userId" element={<Single />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
