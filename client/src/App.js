import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Dashboard/Main";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/LoginPage/Login";
import Home from './components/Main/Home/Home'
import About from "./components/Main/About_Us/About";
import Blogs from "./components/Main/Blogs/Blogs";
import Careers from "./components/Main/Careers/Careers";
import Contacts from "./components/Main/Contacts_Us/Contacts";
import HelpCenter from "./components/Main/Help_Center/Help_Center";
import Investers from "./components/Main/Investers/Investers";
import NotFound from './components/PageNotFound/PageNotFound'

function App() {
	const user = localStorage.getItem("token");

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home  />} />
				<Route path="/home" exact element={<Home  />} />
				<Route path="/about" exact element={<About />} />
				<Route path="/blogs" exact element={<Blogs  />} />
				<Route path="/careers" exact element={<Careers />} />
				<Route path="/contact" exact element={<Contacts  />} />
				<Route path="/help-center" exact element={<HelpCenter />} />
				<Route path="/investers" exact element={<Investers  />} />
				<Route path="*" exact element={<NotFound  />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/signup" exact element={<Signup />} />
				{user && <Route path="/dashboard" exact element={<Main />} />}
				<Route path="/dashboard" element={<Navigate replace to="/login" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
