class CustomSelectTask extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedValue: ""
    }
  }
  render() {
    const handleChange = (e) => {
      this.setState({selectedValue: e.target.value})
    }
    return (
    <div>
    	<select onChange={(e) => handleChange(e)}>
    		<option value="1-10">1-10</option>
    		<option value="10-15">10-15</option>
    		<option value="15-20">15-20</option>
    		<option value="20+">20+</option>
   		</select>
    	<h1>You chose {this.state.selectedValue}</h1>
    </div>
    );
  }
}