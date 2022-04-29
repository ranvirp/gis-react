import React from "react"
import Tree from "react-d3-tree"
/*
   Order1: sale deed from one person to other, sale of area 1.2
   Order2: Order1 stayed, only 0.4 valid

   order1->claim->amaldaramad
   claim(transfer)->amaladaramad
   order2-> claim(order) nirast
   gata -> owners->owner->amaldaramad-> 
 */
export function GataOwnership(){
    const gataOwners = {
        name: '25',
        children: [
            {
                name: 'Kamla',
                attributes: {
                    share: '0.2',
                    area: '2.1',
                    id:'P1'
                },
                children:[
                    {
                        name:'Amaldaramad1',
                        children:[{
                            name:'Radha'
                        },
                            {
                                name:'Sita'
                            }]
                    }

                ]
            },
            {
                name: 'Rakesh',
                attributes: {
                    share: '0.4',
                    area: '2.2'
                },
            },
            {
                name: 'Akshara',
                attributes: {
                    share: '0.4',
                    area: '2.2'
                },
            }
            ]
    };
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{ width: '100%', height: '600px' }}>
            <Tree data={gataOwners} orientation={"vertical"}/>
        </div>
    );

}