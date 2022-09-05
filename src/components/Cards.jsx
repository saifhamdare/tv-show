import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import broken from "../assets/broken-image.png";
const Cards = ({ showsData }) => {
 
  return (
    <div className="grid gap-4 xs:grid-cols-1 ss:grid-cols-2  sm:grid-cols-3 md:grid-cols-4  grid-cols-1  ">
      {showsData?.map((item) => (
        <Link key={item.id} to={`${item.id || item.show.id}`}>
          <Card
            hoverable
            style={{
              width: 240,
              border: "1px solid gray",
              padding: "5px",
            }}
            cover={
              <img
                alt="example"
                src={
                  item?.show.image == null ? broken : item?.show.image.medium
                }
              />
            }
          >
            <Meta title={item?.show.name} />
            <Meta title={item.show.network.name} description={item.name} />
            <Meta title={moment(item.show.schedule.time, ["HH.mm"]).format("hh:mm a")} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
