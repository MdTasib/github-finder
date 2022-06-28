import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<GithubProvider>
			<div className='flex flex-col justify-between h-screen'>
				<Navbar />
				<main className='container mx-auto px-2'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</GithubProvider>
	);
}

export default App;
