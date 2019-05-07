import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../store/actions';

import ItemForm from '../components/ItemForm/ItemForm';

const blankItem = {
  name: '',
  description: '',
  imageUrl: '',
  shipping: '',
  price: null
};

class FormView extends React.Component {
  state = {
    item: {
      name: '',
      description: '',
      imageUrl: '',
      shipping: '',
      price: null
    },
    isEditing: false
  };
  changeHandler = ev => {
    this.setState({
      item: {
        ...this.state.item,
        [ev.target.name]: ev.target.value
      }
    });
  };

  addNewItem = () => {
    this.props.addItem(this.state.item);
  };

  updateItem = () => {
    axios
      .put(
        `http://localhost:3333/items/${this.state.editingId}`,
        this.state.item
      )
      .then(response => {
        this.setState({
          items: response.data,
          editingId: null,
          isEditing: false,
          item: blankItem
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <ItemForm
        addNewItem={this.addNewItem}
        changeHandler={this.changeHandler}
        item={this.state.item}
        isEditing={this.state.isEditing}
        updateItem={this.updateItem}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addItem }
)(FormView);
