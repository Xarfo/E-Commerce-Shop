import React from 'react';
import { connect } from 'react-redux';

import { getItems } from '../store/actions';

import ItemsList from '../components/ItemList/ItemsList';

class ItemListView extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <ItemsList
        history={this.props.history}
        getItemById={this.props.getItemById}
        items={this.props.items}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getItems }
)(ItemListView);
