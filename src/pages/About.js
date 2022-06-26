function About() {
	return (
		<>
			<h1 className='text-4xl mb-4 font-bold'>Github Finder</h1>
			<p className='mb-4 text-xl font-light'>
				A React app to search GitHub profiles and see profile details. <br />
				Hey! I'm Mohammad Tasib. I'm a Front End expert.
			</p>
			<p className='text-lg text-gray-400'>
				Version <span className='text-white'>1.0.0</span>
			</p>
			<p className='text-lg text-gray-400'>
				Layout By:
				<a
					className='text-white'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/mohammad-tasib-4341b71b4/'>
					Mohammad Tasib
				</a>
			</p>
		</>
	);
}

export default About;
