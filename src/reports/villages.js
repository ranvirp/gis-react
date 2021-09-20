import React, {useState} from 'react';
import StickyHeadTable from "../tables/table1";
import FetchFromJsonComponent from "../fetcher/fetchFromJson";
const columns = [

    {
        id: 'village_code_census',
        label: 'Census Code',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'vname',
        label: 'Name',
        minWidth: 70,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'vname_eng',
        label: 'Name(English)',
        minWidth: 70,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

export default class  VillageList extends React.Component
{

    constructor(props) {
        super(props);

    }
    render() {
        const mainC = StickyHeadTable;

        return  (
            <FetchFromJsonComponent url='http://localhost:3000/villages.json' columns={columns} mainC={mainC}></FetchFromJsonComponent>
        );
    }
}

