import React, { useState, useEffect } from "react";
import {axiosWithAuth}  from '../utils/axiosWithAuth.js'
import { makeStyles } from '@material-ui/core/styles';

// import './App.css';
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, HorizontalGridLines, YAxis, XAxis, LineMarkSeries, MarkSeries} from 'react-vis';

const useStyles = makeStyles({
  app: {
    border: '2px solid black',
    borderRadius: '8px',
    margin: '2%',
    padding: '2%'
  }
})

function Map (){
  const classes = useStyles();
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
      <div className={classes.app}>
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