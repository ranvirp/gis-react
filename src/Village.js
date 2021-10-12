import React, { Component } from 'react';
import StickyHeadTable from './components/tables/table1';
import VillageList from './reports/villages';
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
      //  fetch("http://upbhulekh.gov.in/public/public_ror/action/public_action.jsp?act=fillVillage&district_code=150&tehsil_code=00786")
           fetch("./gisfrontend/villages.json", {

               headers : {

                   'Content-Type': 'application/json',

                   'Accept': 'application/json'

               }

           })
            .then(res => res.json())
            .then(
                (result) => {
                   // debugger;
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <VillageList items={items}/>
            );
        }
    }
}

export default MyComponent;
