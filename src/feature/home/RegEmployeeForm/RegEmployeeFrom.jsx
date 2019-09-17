import React, { Component } from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";
import BossList from "./BossList";
import {Field, reduxForm} from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import {combineValidators, isRequired} from "revalidate";


const validate = combineValidators({
  name: isRequired({message: 'Vui lòng nhập họ và tên'}),
  description: isRequired({message: 'Vui lòng nhập mô tả'}),
  email: isRequired({message: 'Vui lòng nhập email'}),
  pass: isRequired({message: 'Vui lòng nhập mật khẩu'}),
})

class RegEmployeeFrom extends Component {
  state = {
      selectedPos: 0
  };

  handleSelect = (pos) => {
      console.log(pos);
      this.setState({
        selectedPos : pos
      })
  }

  onFormSubmit = values => {
    console.log(values);
  }

  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <Segment>
              <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete="off">
                <Field name="name" component={TextInput} title="Tên Nhân Viên" placeholder="may1"/>
                <Field name="description" component={TextInput} title="Mô Tả" placeholder="mô Tả"/>
                <Field name="email" component={TextInput} title="Email" placeholder="email"/>
                <Field name="pass" component={TextInput} title="Mật khẩu" placeholder="mật khẩu"/>
              
                <Button disabled={invalid || submitting || pristine} positive type="submit">
                  Lưu
                </Button>
                <Button type="button">clear</Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <BossList selectedPos={this.state.selectedPos} handleSelectEvent={this.handleSelect}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default reduxForm({form: "employee", validate})(RegEmployeeFrom);
