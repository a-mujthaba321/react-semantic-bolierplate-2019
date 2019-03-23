import React, { Component } from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';

export default class MenuExampleSubMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu vertical style={{ height: '720px' }}>
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>

        <Menu.Item
          name="browse"
          color="teal"
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          Home
          <Icon name="home" />
        </Menu.Item>

        <Menu.Item
          name="browse"
          color="teal"
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          Institutes
          <Icon name="building" />
        </Menu.Item>
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
          Loan Schemes
          <Icon name="money" />
        </Menu.Item>
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
          Scholarship Schemes
          <Icon name="snapchat" />
        </Menu.Item>

        <Dropdown item text="Application Forms">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}
