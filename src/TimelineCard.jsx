import React from 'react';

class TimelineCard extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			imgHovered: false,
		}
	}

	componentDidMount() {

	}

	handleHover() {
		this.setState({
			imgHovered: !this.state.imgHovered,
		})
	}

	render() {
		return !this.state.imgHovered ? 
				<div className='timeline-content'>
					<img 
						className='timeline-img' 
						src={this.props.img} 
						alt='art by Alison'
						onMouseOver={() => this.handleHover()}
						// onMouseLeave={() => this.handleHover()}
					/>
					<div className='timeline-desc'>
						<h2 className='timeline-title'>{this.props.title}</h2>
						<div className='timeline-text'>
							{this.props.text}
						</div>
					</div>
				</div> :
				<img 
					onMouseLeave={() => this.handleHover()} 
					className='timeline-img-hover' 
					src={this.props.img} 
					alt='art by Alison'
				/>
	}
}

export default TimelineCard;