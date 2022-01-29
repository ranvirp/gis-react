import React from "react";
import StickyHeadTable from "./stickyheadtable";

export default class  RpStickyHeaderTable  extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {items:[]}
    }
    render() {
        return  (
            <StickyHeadTable columns={columns} items={this.props.items}/>
        )
    }
}
