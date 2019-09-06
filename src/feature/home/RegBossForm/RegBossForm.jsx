import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class RegBossForm extends Component {
  render() {
    return (
      <Segment>
        <Form autoComplete="off">
          <Form.Field>
            <label>Tên Khách hàng</label>
            <input name="name" placeholder="A.0938933822@hooray.vn" />
          </Form.Field>
          <Form.Field>
            <label>Mô Tả</label>
            <input name="description" placeholder="mô tả" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input name="email" placeholder="email" />
          </Form.Field>
          <Form.Field>
            <label>Mật khẩu</label>
            <input name="hosted" placeholder="mật khẩu" />
          </Form.Field>
          <Button positive type="submit">
            Lưu
          </Button>
          <Button type="button">clear</Button>
        </Form>
      </Segment>
    );
  }
}
export default RegBossForm;
