import React, { Component } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "../modalActions";
import { updateOwnerKeyForEmployee } from "../../home/RegActions";

const mapStateToProps = state => ({
  ownerProfiles: state.register.ownerProfiles
});

const mapActionsToProps = {
  updateOwnerKeyForEmployee,
  closeModal
};

class RegisterModal extends Component {
  handleConfirmClick = () => {
    const { ownerProfile } = this.props;
    this.props.updateOwnerKeyForEmployee(ownerProfile);
  };

  handleCancelClick = () => {
    this.props.closeModal();
  };

  render() {
    const { ownerProfile } = this.props;
    return (
      <Modal size="mini" open={true} onClose={this.props.closeModal}>
        <Modal.Header>Xác nhận Tài Khoản Chủ</Modal.Header>
        <Modal.Content>
          <p>
            Xác nhận tài khoản chủ {ownerProfile.name} - ({ownerProfile.email})
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={this.handleCancelClick}>
            <Icon name="remove" /> HỦY
          </Button>
          <Button color="green" inverted onClick={this.handleConfirmClick}>
            <Icon name="checkmark" /> XÁC NHẬN
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(RegisterModal);
