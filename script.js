var Counter = React.createClass({
	getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
	
	componentWillMount: function() {
    	console.log('Sprawdzam wartość początkową licznika');
    	console.log(this.state.counter);
  	},

  	componentDidMount: function() {
    	console.log('wartość po renderowaniu');
    	console.log(this.state.counter);
  	},

  	componentWillUpdate: function() {
    	console.log('przygotowanie na nadchodzące zmiany');
    	console.log(this.state.counter);
  	},
  
  	componentDidUpdate: function() {	
    	console.log('wartość po kliknięciu')
    	console.log(this.state.counter);
  	},

	render: function() {
        return React.createElement('div', {id: 'counter'},
        	React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('span', {}, this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '-'),
        );
    }
});

var Counters = React.createClass({
  	render: function() {
    	return React.createElement('div', {className: 'counters'},
    		React.createElement('p', {}, 'Licznik 1'),
      		React.createElement(Counter, {}),
      		React.createElement('p', {}, 'Licznik 2'),
      		React.createElement(Counter, {}),
      		React.createElement('p', {}, 'Licznik 3'),
      		React.createElement(Counter, {}),
      		React.createElement('p', {}, 'Licznik 4'),
	  		React.createElement(Counter, {}),
	  	)
  	}
});

var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));
