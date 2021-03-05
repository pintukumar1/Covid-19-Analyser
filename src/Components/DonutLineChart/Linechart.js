import React, { Component } from 'react';
import LineChart from 'react-linechart';
 
class Linechart extends Component {
    render() {
        const data1 = [
            {									
                color: "red", 
                points: [{x: 1.5, y: 1}, {x: 2, y: 2}, {x: 2.5, y: 3}]
            }
        ];
        return (
            <div>
                <div className="App">
                    <LineChart 
                        width={250}
                        height={250}
                        data={data1}
                    />
                </div>				
            </div>
        );
    }
}

export default Linechart;