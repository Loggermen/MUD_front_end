import React, { useState, useEffect } from "react";
import {axiosWithAuth}  from '../utils/axiosWithAuth.js'

// import './App.css';
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, HorizontalGridLines, YAxis, XAxis, LineMarkSeries, MarkSeries} from 'react-vis';
import { generatePoints } from "react-vis/dist/utils/axis-utils";

function Map (){

    const [roomInfo, setRoomInfo] = useState();

    

     useEffect(() => {
         
        axiosWithAuth()
        .get('https://lambda-mud-test.herokuapp.com/api/adv/rooms')
        .then(response => {
          setRoomInfo(response.data)
        

            
         
        })
        .catch(error => console.log('error'))
       }, []);
     
       console.log(roomInfo, "infooo")

//  useEffect(()=> {

// roomInfo.map((room) => ({

// }))

// })

//     const roomPoints =[]
//    const pointmap = roomInfo.map((el, i) => {
//       const x = el [2]
//       const y = el [3]
//       let obj = {x:x, y:y}
//       roomPoints.push(obj)
//     })
// console.log(roomInfo, "roompoints")





const testData ={

  "1":[{"x":0, "y":1}, {"description":"Room 1"}],
  "2":[{"x":0, "y":2},{"description":"Room 2"}],
  "3":[{"x":0.1, "y":2},{"description":"Room 3"}],
  "4":[{"x":0, "y":2},{"description":"Room 4"}],
  "5":[{"x":0, "y":2},{"description":"Room 5"}],
  "6":[{"x":0, "y":3},{"description":"Room 6"}],
  "7":[{"x":0, "y":4},{"description":"Room 7"}],
  "8":[{"x":-0.1, "y":4},{"description":"Room 8"}],
  "9":[{"x":-0.1, "y":5},{"description":"Room 9"}],
  "10":[{"x":-0.1, "y":6},{"description":"Room 10"}],
  "11":[{"x":-0.1, "y":7},{"description":"Room 11"}],
  "12":[{"x":-0.1, "y":8},{"description":"Room 12"}],
  
  
  
  }

 const roomDemo= {
    "room_list": [
      {
        "id": 1,
        "title": "Outside Cave Entrance",
        "description": "North of you, the cave mount beckons",
        "n_to": 2,
        "s_to": 0,
        "e_to": 0,
        "w_to": 0,
        "x":0,
        "y":1,
      },
      {
        "id": 3,
        "title": "Grand Overlook",
        "description": "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
        "n_to": 0,
        "s_to": 2,
        "e_to": 0,
        "w_to": 0,
        "x":0,
        "y":2,
      },
      {
        "id": 2,
        "title": "Foyer",
        "description": "Dim light filters in from the south. Dusty\npassages run north and east.",
        "n_to": 3,
        "s_to": 1,
        "e_to": 4,
        "w_to": 0,
        "x":0.1,
        "y":2,
      },
      {
        "id": 4,
        "title": "Narrow Passage",
        "description": "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
        "n_to": 5,
        "s_to": 0,
        "e_to": 0,
        "w_to": 2,
        "x":0,
        "y":2,
      },
      {
        "id": 5,
        "title": "Treasure Chamber",
        "description": "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
        "n_to": 0,
        "s_to": 4,
        "e_to": 0,
        "w_to": 0,
        "x":0,
        "y":2,
      }
    ],
    "player_position": 0
  }
  const desc = roomDemo.room_list[0].description

// WORKS
  // const pointmap = roomDemo.room_list.map((i) =>( {
   
  //   x: i.x,
  //   y: i.y
  
  //  }))
  //  console.log(pointmap, "poitmap")
 /////////////////////////////////////////////
  


//       const roomPoints =[]
//    const pointmap = roomDemo.room_list.map((i) => {
//       const x = i[6];
//       const y = i[7];
//       let xandy = {x:x, y:y}
//       roomPoints.push(xandy)
//     })
// console.log(roomPoints, "roompoints")

const roomPoints =[]
const pointmap = roomDemo.room_list.map((i) => {
   const x = i.x;
   const y = i.y

   let xandy = {x:x, y:y}
   roomPoints.push(xandy)
 })
 console.log(pointmap, "poitmap")
 console.log(roomPoints, "roompointsss")



 const newpoints=[];
 for (let p in roomDemo) {
   let thenewdata = roomDemo[p][0];
   newpoints.push(thenewdata);
 }
 console.log(newpoints,"newpointsworking")

  const points=[];
for (let p in testData) {
  let newdata = testData[p][0];
  points.push(newdata);
}
console.log(points,"working")

    return (
      <div className="App">
           <XYPlot
    width={700}
    height={600}>
    <HorizontalGridLines />
    <LineMarkSeries
    data={roomPoints}
      // data={[
      //   {x: 0, y: 1},
      //   {x: 0, y: 2},
      //   {x: 0.1, y: 2},
      //   {x: -0.1, y: 2},
      //   {x: 0, y: 2},
      //   {x: 0, y: 3},
      //   {x: 0, y: 4},
      //   {x: -0.1, y: 4},
      //   {x: -0.1, y: 5},
      //   {x: -0.1, y: 6},
      //   {x: -0.1, y: 7},
             
      // ]}
      lineStyle={{stroke:"black", fill: "none"}}
      markStyle={{ stroke:"red"}}
      />


<XAxis />
  <YAxis />
  </XYPlot>
  <h1>{desc}</h1>
      </div>
    );
  }


export default Map;