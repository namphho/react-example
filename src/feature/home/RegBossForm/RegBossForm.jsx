import React, { Component } from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "./../../../app/common/form/TextInput";
import {combineValidators, isRequired} from "revalidate";

const validate = combineValidators({
  name: isRequired({message: 'Vui lòng nhập họ và tên'}),
  description: isRequired({message: 'Vui lòng nhập mô tả'}),
  email: isRequired({message: 'Vui lòng nhập email'}),
  pass: isRequired({message: 'Vui lòng nhập mật khẩu'}),
})

class RegBossForm extends Component {
  onFormSubmit = values => {
    console.log(values);
  };

  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete="off"
            >
              <Field
                name="name"
                component={TextInput}
                type="text"
                title="Tên Khách hàng"
                placeholder="Duc - Cty Hooray"
              />

              <Field
                name="description"
                component={TextInput}
                type="text"
                title="Mô tả"
                placeholder="mô tả"
              />

              <Field
                name="email"
                component={TextInput}
                type="text"
                title="Email"
                placeholder="A.0938933822@hooray.vn"
              />

              <Field
                name="pass"
                component={TextInput}
                type="text"
                title="Mật khẩu"
                placeholder="Mật Khẩu"
              />

              <Button disabled={invalid || submitting || pristine} positive type="submit">
                Lưu
              </Button>
              <Button type="button">clear</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default reduxForm({ form: "boss", validate })(RegBossForm);
//boss is a unique name for the form
