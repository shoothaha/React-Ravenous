import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';


class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    //The attributes pass the props to business.
                    //and the props of businessList is get from app.js
                    this.props.business.map(business => {
                        return <Business business={business} />;
                    })
                }
            </div>
        );
    }
}

export default BusinessList;