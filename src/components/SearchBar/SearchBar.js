import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

    constructor (props){
        super(props);
        this.state = 
        {
            term: '',
            location: '',
            sortBy: 'best_match',
        };

        //handler bind to 'this':
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        // Object to store the api strings:
        this.sortByOptions ={
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count',    
        };
    }

    //change option style
    getSortByClass (sortByOption){
        if (this.state.sortBy === sortByOption){
            return 'active';
        } else {
            return '';
        };
    }

    //handle api in the future
    handleSortByChange (sortByOption){
        this.setState({sortBy: sortByOption});
    }
    
    // Handle the text box for business:
    handleTermChange(event){
        // "Term" refers to business name user typed:
        this.setState({term: event.target.value});
    }

    //handle the location text box:
    handleLocationChange(event){
        this.setState({location: event.target.value});
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (
                //conditionally style each sort by option 
                //displaying to the user which sorting option is currently selected
                <li className={this.getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    //update the state of a sorting option when it is clicked
                    onClick={this.handleSortByChange}>
                    {/*list displayed name: */}
                    {sortByOption}
                </li>);
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;