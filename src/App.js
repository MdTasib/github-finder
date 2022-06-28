import { Routes, Route } from "react-router-dom";
import Alert from "./components/layout/Alert";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<div className='flex flex-col justify-between h-screen'>
					<Navbar />
					<main className='container mx-auto px-2'>
						<Routes>
							<Route
								path='/'
								element={
									<>
										<Alert />
										<Home />
									</>
								}
							/>
							<Route
								path='/home'
								element={
									<>
										<Alert />
										<Home />
									</>
								}
							/>
							<Route path='/about' element={<About />} />
							<Route path='/user/:login' element={<User />} />
							<Route path='/notfound' element={<NotFound />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
