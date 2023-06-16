import Picture1 from './assets/1.png'
import Picture2 from './assets/2.png'
import Picture3 from './assets/3.png'
import Picture4 from './assets/4.png'
import Picture5 from './assets/5.png'
import { Card } from './components'
import './styles/App.css'

const cards = [
	{
		imageURL: Picture1,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'large',
		onClick: () => alert('Button is worked')
	},
	{
		imageURL: Picture2,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onClick: () => alert('Button is worked')
	},
	{
		imageURL: Picture3,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onClick: () => alert('Button is worked')
	},
	{
		imageURL: Picture4,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onClick: () => alert('Button is worked')
	},
	{
		imageURL: Picture5,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onClick: () => alert('Button is worked')
	}
];
function App() {
	return (
	<>
		<div className='main-title'>
			<h2>A lot is happening,
				We are blogging about it.</h2>
		</div>

		<div className='app'>
			<div className='app__col-1'>
				<div className='app__item-1'>
					<Card {...cards[0]} />
				</div>
			</div>

			<div className='app__col-2'>
				<div className='app__col-3'>
					<div className='app__item-3'>
						<Card {...cards[1]} />
					</div>
				</div>
				<div className='app__col-3'>
					<div className='app__item-3'>
						<Card {...cards[2]} />
					</div>
				</div>
				<div className='app__col-3'>
					<div className='app__item-3'>
						<Card {...cards[3]} />
					</div>
				</div>
				<div className='app__col-3'>
					<div className='app__item-3'>
						<Card {...cards[4]} />
					</div>
				</div>
			</div>
		</div>
	</>
	);
}

export default App;
