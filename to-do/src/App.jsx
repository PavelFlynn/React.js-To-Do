import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, NotFound } from './components';

export default function App() {

	return (
		<BrowserRouter>

			<Routes>
				<Route path='/' exact element={ <Layout /> } />
				<Route path='*' element={ <NotFound /> } />
			</Routes>

		</BrowserRouter>
	)
}

