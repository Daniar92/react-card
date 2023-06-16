import './Card.css'

export const Card = props => {
	const { imageURL, data, title, buttonText, onClick, size } = props
	const cardStyle = {
		height: size === 'large' ? '700px' : '330px',
	}
	return (
		<div className='container'>
			<div className='card' style={cardStyle}>
				<img
					style={{ width: '100%', height: '40%' }}
					src={imageURL}
					alt='img'
				/>
				<div className='card__style'>
					<h6 className='card__data'>{data}</h6>
					<h3 className='card__title'>{title}</h3>
					<button className='card__button' onClick={onClick}>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	)
}
