import React, {Component} from "react";

class SearchbarComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    dropdownHandler = (bool) => {
        this.setState({isActive: bool})
    }
    render(){
        const { isActive } = this.state;
        const { handler, search } = this.props;
        const { dropdownHandler } = this;
        return (
            <div className="header_content_searchbar_wrapper">
                <div className="header_content_searchbar">
                    <label htmlFor="search">
                        <input
                            onBlur={() => dropdownHandler(false)}
                            onFocus={() => dropdownHandler(true)}
                            className="search_input"
                            placeholder="Wpisz minimum 4 znaki..."
                            onChange={(e) => handler(e)}
                            type="text"
                            name="search"/>
                    </label>
                    <button>Jem!</button>
                    {search && (
                        <div className={"header_content_searchbar_dropdown " + (isActive ? 'active' : '')}>
                            {search.map(item => {
                                const { name, imageUrl, price } = item;
                                return <div className="header_content_searchbar_dropdown_item">
                                    <img src={imageUrl} alt={name}/>
                                    <div>
                                        {name}
                                    </div>
                                    <div>
                                        {price} zł
                                    </div>
                                </div>
                            })}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default SearchbarComponent;
