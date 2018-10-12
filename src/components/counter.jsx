import React, { Component } from 'react';

// turn this into a controlled component, with no local state
class Counter extends Component {

    // state is private to the component
    // proprs is readonly
    state = {
        value: this.props.counter.value,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    /*
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    */

    componentDidUpdate(prevProps, prevState) {
        // compared changes in props/state
        // then make ajax request based on that
        console.log('componentDidUpdate:', prevProps, prevState);
    }

    componentWillUnmount() {
        // do clean up like removing timers, listeners, to ensure no memory leaks
    }

    /*
    handleIncrement = product => {
        console.log('increment clicked', product);
        this.setState({ value: this.state.value + 1 });
    }
    */

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? <span>Zero</span> : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() {
        return(
            <div>
                {this.props.children}
                <img src={this.state.imageUrl}/>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}
            </div>
        );
    }
}

export default Counter;