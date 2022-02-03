import Button from './components/Button';
import Container from './components/Container';
import List from './components/List';
import Title from './components/Title';
function App() {

	const doMagic = () => {
		console.log(`I'm a reusable limitless button component now`);
	}

	return (
		<>
			<Container>
				<Title coolPropName='🚀' />
				<List />
				<Button
					// onClick={onClick} Mange gjør sånn som dette.. blir fort rotete.
					fancyFunction={doMagic}
					fancyWords='PUSH'
				/>
			</Container>
		</>
	);
}

export default App;
