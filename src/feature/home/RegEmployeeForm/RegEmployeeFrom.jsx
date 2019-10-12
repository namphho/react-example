import React, { Component } from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";
import BossList from "./BossList";
import {Field, reduxForm} from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import {combineValidators, isRequired} from "revalidate";
import {createEmployee} from "../RegActions"
import { connect } from "react-redux";
import { resetFields } from "../FormUtils";

const validate = combineValidators({
  name: isRequired({message: 'Vui lòng nhập họ và tên'}),
  description: isRequired({message: 'Vui lòng nhập mô tả'}),
  email: isRequired({message: 'Vui lòng nhập email'}),
  pass: isRequired({message: 'Vui lòng nhập mật khẩu'}),
})


const mapStateToProps = (state) => ({
  ownerProfiles : state.register.ownerProfiles,
  boss: state.form.employee
})

const mapDispatchToProps = {
  createEmployee
}

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
    this.props.createEmployee({
      email: values.email,
      description: values.description,
      name: values.name,
      password: values.pass,
    })
    resetFields(this.props, 'employee', {
      email: '',
      pass: '',
      name: '',
      description: ''
    })
  }

  render() {
    const {invalid, submitting, pristine, ownerProfiles} = this.props;
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
            <BossList selectedPos={this.state.selectedPos} ownerProfiles={ownerProfiles} handleSelectEvent={this.handleSelect}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: "employee", validate})(RegEmployeeFrom));
