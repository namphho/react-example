import React, { Component } from "react";
import { List, Button, Image } from "semantic-ui-react";

class BossList extends Component {
  render() {
    return (
      <div>
        <h2>Chọn danh sách boss </h2> 
        <List divided verticalAlign="middle">
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <List.Content>Lena</List.Content>
            <List.Description>description 1</List.Description>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <List.Content>Lindsay</List.Content>
            <List.Description>description 1</List.Description>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <List.Content>Mark</List.Content>
            <List.Description>description 1</List.Description>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <List.Content>Molly</List.Content>
            <List.Description>description 1</List.Description>
          </List.Item>
        </List>
      </div>
    );
  }
}
export default BossList;
