import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";



class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item  header>
            <img src="assets/logo.png" alt="logo" />
            MGX ĐĂNG KÝ
          </Menu.Item>
          <Menu.Item  as={NavLink} exact to="/boss" name="DANG KY CHU" />
          <Menu.Item  as={NavLink} to="/employee" name="DANG KY NHAN VIEN" />
          <Menu.Item  as={NavLink} to="/test" name="Test" />
        </Container>

      </Menu>
    );
  }
}
export default NavBar;
