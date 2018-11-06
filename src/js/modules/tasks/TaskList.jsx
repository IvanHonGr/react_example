import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggle } from './reducer';

const modify = connect(
	state => ({
		tasks: state.tasks
	}),
	{ toggle }
);

class TaskList extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
		tasks: PropTypes.array.isRequired
  };

	toggleCompleted(i) {
		return () => this.props.toggle(i);
	}

  render() {
    const {text, tasks} = this.props;
    return (
			<div>
				<h1>Hi ninja, reactive ninja!!!</h1>
				<Title text={text} />
    		<ul>
      		{tasks.map((task, i) =>
						<Item
							key={i}
							text={task.text}
							completed={task.completed}
							onChange={this.toggleCompleted(i)}
						/>)}
    		</ul>
  		</div>
	  );
  }
}

export default modify(TaskList);

const Item = ({text, completed, onChange}) =>
<li>
	<label>
		<input type="checkbox" checked={completed} onChange={onChange} />
  	{text}
	</label>
</li>;

const Title = ({text}) =>
<h2>{text}</h2>
