import React, { useState, useEffect } from "react";
import {axiosWithAuth}  from '../utils/axiosWithAuth.js'

// import './App.css';
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, HorizontalGridLines, YAxis, XAxis, LineMarkSeries, MarkSeries} from 'react-vis';

function Map (){

    // const [setRoomInfo, roomInfo] = useState();

      
    //  useEffect(() => {
         
    //     axiosWithAuth()
    //     .get('')
    //     .then(response => {
    //         console.log(response.data.rooms, "res")
    //         setRoomInfo( response.data);
    //     })
    //     .catch(error => console.log('error'))
    //    }, []);
     
    //    const roomData = Object.values(roomInfo)

    return (
      <div className="App">
           <XYPlot
    width={700}
    height={600}>
    <HorizontalGridLines />
    <LineMarkSeries
      data={[
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 0.1, y: 2},
        {x: -0.1, y: 2},
        {x: 0, y: 2},
        {x: 0, y: 3},
        {x: 0, y: 4},
        {x: -0.1, y: 4},
        {x: -0.1, y: 5},
        {x: -0.1, y: 6},
        {x: -0.1, y: 7},
             
      ]}
      lineStyle={{stroke:"black", fill: "none"}}
      markStyle={{ stroke:"red"}}
      />


<XAxis />
  <YAxis />
  </XYPlot>
      </div>
    );
  }


export default Map;