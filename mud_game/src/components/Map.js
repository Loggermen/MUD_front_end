import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

// import './App.css';
// import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  YAxis,
  XAxis,
  LineMarkSeries,
  MarkSeries,
  VerticalGridLines,
  CustomSVGSeries
} from "react-vis";
import { generatePoints } from "react-vis/dist/utils/axis-utils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Map: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    border: "5px solid black",
    background: "green",
    padding: "10px"
  }
});

function Map(props) {
  const classes = useStyles();

  const [roomInfo, setRoomInfo] = useState([]);

  console.log(roomInfo, "ROOMINFO");

  useEffect(() => {
    axiosWithAuth()
      .get("https://lumbwars-test.herokuapp.com/api/adv/rooms/")
      .then(response => {
        console.log(response.data, "MAP RESPONSE");
        localStorage.setItem("playerPosX", response.data.player_x_pos);
        localStorage.setItem("playerPosY", response.data.player_y_pos);
        // localStorage.setItem("playerPos", response.data.player_position);
        setRoomInfo(response.data.room_list);
      })
      .catch(error => console.log("error"));
  }, [props]);

  if (roomInfo.length < 1) {
    localStorage.setItem("playerPosX", 0);
    localStorage.setItem("playerPosY", 0);
  }

  const position = localStorage.getItem("playerPos");

  let curPost = [];
  const nexX = localStorage.getItem("playerPosX");
  const nexY = localStorage.getItem("playerPosY");
  let xandy = { x: nexX, y: nexY };
  curPost.push(xandy);

  //WORKING FROM DATA COMING IN
  const roomPoints = [];
  const pointmap = roomInfo.map(i => {
    const x = i.x;
    const y = i.y;

    let xandy = { x: x, y: y };
    roomPoints.push(xandy);
  });
  //  console.log(pointmap, "poitmap")
  console.log(roomPoints, "roompointsss");

  if (roomInfo.length < 0) {
    return <span>Loading...</span>;
  }

  return (
    <div className={classes.Map}>
      <XYPlot width={600} height={600}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <LineMarkSeries
          data={roomPoints}
          size="8"
          color="#654321"
          lineStyle={{ stroke: "none", fill: "none" }}
          markStyle={{ stroke: "black" }}
        />

        {/* <MarkSeries
          highlight="yellow"
          size="20"
          strokeWidth={3}
          data={curPost}
          animation
          color="yellow"
          stroke= "black"
          customComponent="star" 


          // style={{cursor:"pointer"}}
        /> */}
        <CustomSVGSeries
          customComponent="star"
          highlight="yellow"
          size="25"
          strokeWidth={5}
          data={curPost}
          animation
          style={{ stroke: "black", fill: "yellow", strokeWidth:"2" }}
        />

        {/* <XAxis />
        <YAxis /> */}
      </XYPlot>
    </div>
  );
}

export default Map;
