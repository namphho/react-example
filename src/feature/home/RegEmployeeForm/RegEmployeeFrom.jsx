import React, { Component } from "react";
import { Segment, Form, Button, Grid, Search } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { combineValidators, isRequired } from "revalidate";
import { createEmployee, updateOwnerKeyForEmployee, searchOwner } from "../RegActions";
import { connect } from "react-redux";
import { resetFields } from "../FormUtils";
import { openModal } from "../../modal/modalActions";
import _ from 'lodash'

const validate = combineValidators({
  name: isRequired({ message: "Vui lòng nhập họ và tên" }),
  description: isRequired({ message: "Vui lòng nhập mô tả" }),
  email: isRequired({ message: "Vui lòng nhập email" }),
  pass: isRequired({ message: "Vui lòng nhập mật khẩu" })
});

const mapStateToProps = state => {
  var results = state.register.ownerProfiles.map(profile => ({
    title: profile.email,
    description: profile.description,
    payload: profile
  }));

  return ({
    boss: state.form.employee,
    results: results
  });
} 

const mapDispatchToProps = {
  createEmployee,
  updateOwnerKeyForEmployee,
  openModal,
  searchOwner
};

class RegEmployeeFrom extends Component {

  state = {
    value : {},
  }

  handleSelect = pos => {
    this.props.openModal("ConfirmModal", { ownerProfile: `${pos}` });
  };

  onFormSubmit = values => {
    console.log(values);
    this.props.createEmployee({
      email: values.email,
      description: values.description,
      name: values.name,
      password: values.pass
    });
    resetFields(this.props, "employee", {
      email: "",
      pass: "",
      name: "",
      description: ""
    });
  };

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
    console.log(result.payload);
    this.props.openModal("ConfirmModal", { ownerProfile: result.payload });
  }

  handleSearchChange = (e, { value }) => {
    this.setState({value: value})
    this.props.searchOwner(value);
  }

  render() {
    const { invalid, submitting, pristine, value, results } = this.props;
    return (
      <div>
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
                  title="Tên Nhân Viên"
                  placeholder="may1"
                />
                <Field
                  name="description"
                  component={TextInput}
                  title="Mô Tả"
                  placeholder="mô Tả"
                />
                <Field
                  name="email"
                  component={TextInput}
                  title="Email"
                  placeholder="email"
                />
                <Field
                  name="pass"
                  component={TextInput}
                  title="Mật khẩu"
                  placeholder="mật khẩu"
                />

                <Button
                  disabled={invalid || submitting || pristine}
                  positive
                  type="submit"
                >
                  Lưu
                </Button>
                <Button type="button">clear</Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Tìm Kiếm Chủ</h2>
            <Search
              className = 'searchInput'
              loading={false}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              results={results}
              value={value}
              {...this.props}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "employee", validate })(RegEmployeeFrom));
