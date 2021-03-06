import React from 'react';
import LineChart from 'react-linechart';
 
const Chart = () => {
      const data = [
        {									
            color: "blue", 
            points: [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}] 
        }
    ];

    return (
        <div>
            <div className="App">
                <LineChart 
                    width={300}
                    height={300}
                    data={data}
                />
            </div>				
        </div>
    );
}

export default Chart;