import React from 'react';

class TimelineCard extends React.Component {

	constructor(props) {
		super(props)

		this.state = {

		}
	}

	componentDidMount() {

	}

	render() {
			return (
				<div className='timeline-content'>
					<img className='timeline-img' src={this.props.img} alt='art by Alison'></img>
					<div className='timeline-desc'>
						<h2 className='timeline-title'>{this.props.title}</h2>
						<div className='timeline-text'>
							{this.props.text}
						</div>
					</div>
				</div>
			)
	}
}

export default TimelineCard;