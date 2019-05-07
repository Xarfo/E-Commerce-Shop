import React from 'react';
import { withRouter } from 'react-router';

function ItemForm(props) {
  const handleClick = ev => {
    ev.preventDefault();
    if (props.isEditing) {
      props.updateItem();
    } else {
      props.addNewItem();
    }
    props.history.push('/item-list');
  };

  return (
    <div>
      <h2>{props.isEditing ? 'Edit Item' : 'Add New Item'}</h2>
      <form action="">
        <input
          type="text"
          name="name"
          onChange={props.changeHandler}
          placeholder="name"
          value={props.item.name}
        />
        <div class="baseline" />

        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={props.changeHandler}
          value={props.item.description}
        />
        <div class="baseline" />

        <input
          type="text"
          name="imageUrl"
          onChange={props.changeHandler}
          placeholder="image url"
          value={props.item.imageUrl}
        />
        <div class="baseline" />

        <input
          type="text"
          name="shipping"
          onChange={props.changeHandler}
          placeholder="shipping info"
          value={props.item.shipping}
        />
        <div class="baseline" />

        <input
          type="number"
          name="price"
          onChange={props.changeHandler}
          placeholder="price"
          value={props.item.price}
        />
        <div class="baseline" />

        <button onClick={handleClick} className="md-button form-button">
          {props.isEditing ? 'Update Item' : 'Add Item'}
        </button>
      </form>
    </div>
  );
}

export default withRouter(ItemForm);
