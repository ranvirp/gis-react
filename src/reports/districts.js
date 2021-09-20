import React, {useState} from 'react';
import StickyHeadTable from "../tables/table1";
import FetchFromJsonComponent from "../fetcher/fetchFromJson";
const columns = [

    {
        id: 'district_code_census',
        label: 'Census Code',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'district_name',
        label: 'Name',
        minWidth: 70,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'district_name_english',
        label: 'Name(English)',
        minWidth: 70,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
];

export default class  DistrictList extends React.Component
{

    constructor(props) {
        super(props);

    }
    render() {
        const mainC = StickyHeadTable;

        return  (
           <FetchFromJsonComponent url='http://localhost:3000/districts.json' columns={columns} mainC={mainC}></FetchFromJsonComponent>
        );
    }
}

