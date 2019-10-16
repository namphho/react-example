import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { updateOwnerKeyForEmployee } from "../../home/RegActions";
import { closeModal } from "../modalActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    ownerProfiles: state.register.ownerProfiles,
});

const mapActionsToProps = {
  updateOwnerKeyForEmployee,
  closeModal
};

class ConfirmOwnerButton extends Component {
  handleConfirmClick = () => {
    const { ownerId } = this.props;
    this.props.updateOwnerKeyForEmployee(ownerId);
  };

  handleCancelClick = () => {
    this.props.closeModal();
  };

  render() {
    const {ownerId, ownerProfiles} = this.props;
    const ownerProfile = ownerProfiles.filter(profiles => profiles.id === ownerId)[0];
    return (
      <div>
        <p>Xác nhận tài khoản chủ {ownerProfile.name} - ({ownerProfile.email})</p>
        <Button color="teal" onClick={this.handleConfirmClick}>
          Xác Nhận
        </Button>
        <Button color="grey" onClick={this.handleCancelClick}>
          Hủy
        </Button>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
  mapActionsToProps
)(ConfirmOwnerButton);
