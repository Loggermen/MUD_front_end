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
  },
  directions: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "space-evenly",
    
  }
});

function Map(props) {
  const classes = useStyles();

  const [roomInfo, setRoomInfo] = useState([]);
  const [curRoomInfo, setCurRoomInfo] = useState();
  console.log(curRoomInfo, "INFOOCUR");

  // console.log(roomInfo, "ROOMINFO");

  useEffect(() => {
    axiosWithAuth()
      .get("https://lumbwars-test.herokuapp.com/api/adv/rooms/")
      .then(response => {
        console.log(response.data, "MAP RESPONSE");
        localStorage.setItem("playerPosX", response.data.player_x_pos);
        localStorage.setItem("playerPosY", response.data.player_y_pos);
        localStorage.setItem("playerCur", response.data.player_current_room);

        setRoomInfo(response.data.room_list);
      })
      .catch(error => console.log("error"));
  }, [props]);

  const currentRoom = localStorage.getItem("playerCur");

  useEffect(() => {
    axiosWithAuth()
      .get(`https://lumbwars-test.herokuapp.com/api/adv/room/${currentRoom}`)
      .then(response => {
        console.log(response.data, "current RESPONSEeeeeeeeeeeeeeeee");
        localStorage.setItem("n_to", response.data.n_to);
        localStorage.setItem("s_to", response.data.s_to);
        localStorage.setItem("w_to", response.data.w_to);
        localStorage.setItem("e_to", response.data.e_to);

        setCurRoomInfo(response.data);
      })
      .catch(error => console.log("error"));
  }, [roomInfo]);

  if (roomInfo.length < 1) {
    localStorage.setItem("playerPosX", 0);
    localStorage.setItem("playerPosY", 0);
  }

  const position = localStorage.getItem("playerPos");
  const north = localStorage.getItem("n_to");
  const south = localStorage.getItem("s_to");
  const west = localStorage.getItem("w_to");
  const east = localStorage.getItem("e_to");

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
  // console.log(roomPoints, "roompointsss");

  // if (!curRoomInfo) {
  //   return <span>Loading...</span>;
  // }

  if (roomInfo.length < 0) {
    return <span>Loading...</span>;
  }

  return (
    <div>
    <div className={classes.Map}>
      <XYPlot width={700} height={600}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <LineMarkSeries
          data={roomPoints}
          size="8"
          color="#654321"
          lineStyle={{ stroke: "none", fill: "none" }}
          markStyle={{ stroke: "black" }}
        />

        <CustomSVGSeries
          customComponent="star"
          highlight="yellow"
          size="25"
          strokeWidth={5}
          data={curPost}
          animation
          style={{ stroke: "black", fill: "yellow", strokeWidth: "2" }}
        />

        {/* <XAxis />
        <YAxis /> */}
      </XYPlot>
      </div>
      <div className={classes.directions}>
        
        {north !== "0" ? <h3>Exit to the North</h3> : null}
        {south !== "0" ? <h3>Exit to the South</h3> : null}
        {west !== "0" ? <h3>Exit to the West</h3> : null}
        {east !== "0" ? <h3>Exit to the East</h3> : null}
      
      </div>
    </div>
  );
}

export default Map;
