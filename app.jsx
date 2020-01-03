class Title extends React.Component {
	render() {
		return <h3>Sidebar</h3>;
	}
}

class ToggleBtn extends React.Component {
	render() {
		var onClickMethod = this.props.clickHandler;
		return <h1 onClick={onClickMethod}>||||</h1>;
	}
}

class ItemIcon extends React.Component {
	render() {
		var icon = this.props.url;
		return <div className='item-icon'>{icon}</div>;
	}
}

class ItemTitle extends React.Component {
	render() {
		var title = this.props.title;
		return <div className='item-title'>{title}</div>;
	}
}

class Item extends React.Component {
	render() {
		var item = this.props.source,
			showTitle = this.props.showTitle.value,
			titleElem = null;
		if(showTitle) {
			titleElem = <ItemTitle title={item.title}/>;
		}
		return <div><ItemIcon url={item.url}/>{titleElem}</div>;
	}
}

class ItemList extends React.Component {
	render() {
		var itemSource = this.props.source,
			itemsElems = [];
		for(var item in itemSource) {
			itemsElems.push(<Item source={itemSource[item]} showTitle={this.props.showTitle}/>);
		}
		return itemsElems;
	}
}

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.items = this.props.menuItems;
		this.state = {value: false};
	}
	onToggle (displayObj) {
		this.setState({value: !this.state.value});
	};

	render() {		
		return (<div><ToggleBtn clickHandler={() => this.onToggle(this.state)}/><ItemList source={this.items} showTitle={this.state}/></div>);
	}
}

ReactDOM.render(<Sidebar menuItems={[{url: 'A', 'title': 'Adam'}, {'url': 'B', 'title': 'Brad'}, {'url': 'C', 'title': 'Cavin'}]}/>, document.getElementById('root'));