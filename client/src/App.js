import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Dashboard/Main";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/LoginPage/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Login  />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/signup" exact element={<Signup />} />
				{user && <Route path="/dashboard" exact element={<Main />} />}
				<Route path="/dashboard" element={<Navigate replace to="/login" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
