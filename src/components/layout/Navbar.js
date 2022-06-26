import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Navbar(props) {
	return (
		<div class='navbar shadow-lg shadow-white/10 bg-neutral text-white'>
			<div className='container mx-auto'>
				<div class='flex-1'>
					<FaGithub className='inline pr-2 text-3xl' />
					<Link to='/' className='text-lg font-bold align-middle'>
						Github Finder
					</Link>
				</div>
				<div class='flex-none'>
					<ul class='menu menu-horizontal p-0 gap-4'>
						<Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
							Home
						</Link>
						<Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
							About
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
