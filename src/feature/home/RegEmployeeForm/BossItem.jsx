import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";

class BossItem extends Component {
  handleSelect = evt => {
    evt.preventDefault();
    this.props.handleSelectEvent(this.props.id)
  };

  render() {
    const {
      email,
      description,
      isSelected,
    } = this.props;
    return (
      <List.Item>
        <List.Content floated="right">
          {isSelected ? (
            <Button color="green" icon="checkmark" />
          ) : (
            <Button onClick={this.handleSelect}>Chọn</Button>
          )}
        </List.Content>
        <List.Content>{email}</List.Content>
        <List.Description>{description}</List.Description>
      </List.Item>
    );
  }
}

export default BossItem;
