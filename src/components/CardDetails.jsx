import { Card } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/helper";
import broken from "../assets/broken-image.png";
const CardDetails = ({showsData}) => {
const { id } = useParams();
const regex = /(<([^>]+)>)/ig;
  return (
    <div className="content">
      {showsData.filter((item) => item.id===Number(id)|| item.show.id===Number(id)).map((item)=>(
        <div  className=" sm:flex gap-2" key={item.id}>
            <div className="flex justify-center sm:justify-start m-3">
              <Card
                 hoverable
                 style={{
                   width: 240,
                
                 }}
                 cover={
                   <img
                     alt="example"
                     src={item?.show.image == null ? broken : item?.show.image.medium}
                   />
                 }
              ></Card>
            </div>
            <div className="description m-2 bg-slate-100">
              <div className="bg-slate-200">
              <h1 className="sm:text-2xl text-2xl font-bold" >Description</h1>
              </div>
              <h2 className="sm:text-xl text-xl" ><span className="sm:text-xl font-bold">Title:</span> {item.show.name}</h2>
              <h2 className="sm:text-xl text-xl" ><span className="sm:text-xl font-bold">Channel:</span> {item.show.network.name}</h2>
              <h2 className="sm:text-xl text-xl" ><span className="sm:text-xl font-bold">Time:</span> {moment(item.airtime,["HH.mm"]).format("hh:mm a")}</h2>
              <h2 className="sm:text-xl text-xl"  ><span className="sm:text-xl font-bold">Summary:</span> {item.show.summary.replace(regex, '')}</h2>
            </div>
        </div>
      ))}
    </div>
  );
}
// };

export default CardDetails;
