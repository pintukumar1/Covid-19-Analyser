import React, { Component } from 'react';
import LineChart from 'react-linechart';
 
class Linechart extends Component {
    render() {
        const data1 = [
            {									
                color: "red", 
                points: [{x: 1, y: 1}, {x: 2, y: 3}, {x: 4, y: 3}] 
            }
        ];
        return (
            <div>
                <div className="App">
                    <LineChart 
                        width={300}
                        height={300}
                        data={data1}
                    />
                </div>				
            </div>
        );
    }
}

export default Linechart;