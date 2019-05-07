import React from 'react';
import { connect } from 'react-redux';

import { getItems, deleteItem } from '../store/actions';

import Item from '../components/Item/Item';

class ItemView extends React.Component {
  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.getItems();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      this.props.history.push('/item-list');
    }
  }

  deleteItem = (ev, id) => {
    ev.preventDefault();
    this.props.deleteItem(id);
  };

  setUpUpdateForm = (ev, item) => {
    ev.preventDefault();
    this.setState({
      item, // same as item: item,
      isEditing: true,
      editingId: item.id
    });
  };

  render() {
    return (
      <Item
        items={this.props.items}
        history={this.props.history}
        match={this.props.match}
        deleteItem={this.deleteItem}
        updateItem={this.setUpUpdateForm}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});
export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ItemView);
