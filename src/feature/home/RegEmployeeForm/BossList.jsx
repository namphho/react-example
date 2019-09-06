import React, { Component } from "react";
import { List, Button, Image } from "semantic-ui-react";
import BossItem from "./BossItem";

const data = [
  {
    id: 0,
    email: "nguyenvanA.gmail.com",
    description: "description A"
  },
  {
    id: 1,
    email: "nguyenvanB.gmail.com",
    description: "description B"
  },
  {
    id: 2,
    email: "nguyenvanB.gmail.com",
    description: "description C"
  },
  {
    id: 3,
    email: "nguyenvanC.gmail.com",
    description: "description D"
  }
];

class BossList extends Component {
  render() {
     const {selectedPos, handleSelectEvent} = this.props; 
    return (
      <div>
        <h2>Chọn danh sách boss </h2>
        <List divided verticalAlign="middle">
          {data.map(event => {
            return (
              <BossItem
                key={event.id}
                email={event.email}
                description={event.description}
                isSelected = {event.id === selectedPos}
                id = {event.id}
                handleSelectEvent = {handleSelectEvent}
              />
            );
          })}
        </List>
      </div>
    );
  }
}
export default BossList;
