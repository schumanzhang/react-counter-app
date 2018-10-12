import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props; 
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => 
                    <Counter key={counter.id} 
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter}>
                        <h4> Title #{counter.id}</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;

// component lifecyle hooks

/*
Mount phase
 - constructor
 - render
 - componentDidMount
*/

/*
Update phase
 - render
 - componentDidUpdate
*/

/*
Unmount phase
- componentWillUnmount
*/
