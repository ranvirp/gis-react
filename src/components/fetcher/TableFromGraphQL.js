import React, { Component } from 'react';
import {postGraphSqlQuery} from "./graphsqlfetcher";

export class TableFromGraphQL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    async componentDidMount() {
        const result = await postGraphSqlQuery(this.props.url, this.props.query, this.props.variables)
        if (result.errors)  this.setState({
            isLoaded: true,
            errors:result.errors
        }); else {
            this.setState({
                isLoaded: true,
                items: result.data
            });
        }


    }

    render() {
        const { error, isLoaded, items } = this.state;


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const Mainc = this.props.mainC;
            return (
                <Mainc columns={this.props.columns} items={items}/>
            );
        }
    }
}


