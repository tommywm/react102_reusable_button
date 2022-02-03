const Button = ({ fancyFunction, fancyWords }) => {
	return (
		<>
			<button type='button' onClick={fancyFunction}>
				{fancyWords}
			</button>
		</>
	);
};

export default Button;