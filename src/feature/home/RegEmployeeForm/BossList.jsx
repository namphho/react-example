import React, { Component } from "react";
import { List } from "semantic-ui-react";
import BossItem from "./BossItem";

class BossList extends Component {
  render() {
    const {handleSelectEvent, ownerProfiles } = this.props;
    return (
      <div>
        <h2>Chọn danh sách boss </h2>
        <List divided verticalAlign="middle">
          {ownerProfiles &&
            ownerProfiles.map(owner => {
              return (
                <BossItem
                  key={owner.id}
                  email={owner.email}
                  description={owner.description}
                  isSelected={false}
                  id={owner.id}
                  handleSelectEvent={handleSelectEvent}
                />
              );
            })}
        </List>
      </div>
    );
  }
}
export default BossList;
