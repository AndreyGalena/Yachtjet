import './App.css?v=1.1';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import OurTruck from '../OurTruck/OurTruck';
import Advantages from '../Advantages/Advantages';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<AboutUs />
				<OurTruck />
				<Advantages />
			</main>
			<Footer />
		</>
	);
}

export default App;


// rafce - () => {}
// rfce - function

// fof - for_of
// fin - for_in
// fre - .forEach