import React, { useState,useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
import classes from "./Map.module.css";
import axios from "axios";
import Map from "./index";

const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937]
};

const COLOR_RANGE = [
  '#ffedea',
  '#ffcec5',
  '#ffad9f',
  '#ff8a75',
  '#ff5533',
  '#e2492d',
  '#be3d26',
  '#9a311f',
  '#782618'
];

const DEFAULT_COLOR = '#EEE';

const geographyStyle = {
  default: { 
    outline: 'none'
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};

function MapComponent() {
  const [tooltipContent, setTooltipContent] = useState('');
  const [data, setData] = useState([]);
  const [mapId,setMapId] = useState(null);
  const colorScale = scaleQuantile()
    .domain(data.map(d => d.value))
    .range(COLOR_RANGE);
    const fetchData = async() => {
      const response = await axios.get("https://api.covid19india.org/data.json");
      let data = [];
      response.data.statewise.forEach(state => {
        data.push({id:state.statecode,state:state.state,value:state.confirmed})
      });      
      setData(data);
    }
    useEffect(() => {
      fetchData();
    },[data])

  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    return () => {
     setMapId(current.id);
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
    setMapId(null)
  };

  return (
    <div className={classes.mapDiv}>
      <Map id={mapId}/>
      <h1 className="no-margin center">States and UTs</h1>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={300}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                const current = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <div>
        </div>
    </div>
  );
}

export default MapComponent;
