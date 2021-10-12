import React from 'react';

import LeafletMap from "../components/leaflet/components/leafletmap";



export default {
    title: 'Leaflet',
    component: LeafletMap,
};

const Template = (args) => <LeafletMap {...args} />;

export const signup = Template.bind({});


