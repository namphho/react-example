import React, { Component } from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";
import BossList from "./BossList";

class RegEmployeeFrom extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <Segment>
              <Form autoComplete="off">
                <Form.Field>
                  <label>Tên Nhân Viên</label>
                  <input name="name" placeholder="may1" />
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
          </Grid.Column>
          <Grid.Column width={6}>
                <BossList/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default RegEmployeeFrom;
