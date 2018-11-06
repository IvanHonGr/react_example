import React from 'react';
import PropTypes from 'prop-types';

export default class Test extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
  };

	state = {
		completed: this.props.tasks.map(task => task.completed)
	}

	toggleCompleted(i) {
		return() => {
			this.setState({
				completed: this.state.completed.map((value, index) =>
					index === i ? ! value : value)
			})
		}
	}

  render() {
    const {text, tasks} = this.props;
    return (
			<div>
				<h1>{text} ninja, reactive ninja</h1>
    		<ul>
      		{tasks.map((task, i) =>
						<Item
							key={i}
							text={task.text}
							completed={this.state.completed[i]}
							onChange={this.toggleCompleted(i)}
						/>)}
    		</ul>
  		</div>
	  );
  }
}

const Item = ({text, completed, onChange}) =>
<li>
	<label>
		<input type="checkbox" checked={completed} onChange={onChange} />
  	{text}
	</label>
</li>;
