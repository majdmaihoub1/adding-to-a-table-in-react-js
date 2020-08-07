import React from 'react'

const EditProductItem = props => {
  return (
    <form>
      <div className="form-group">
        <label>Product name</label>
        <input type="text" className="form-control" name="product" value={props.product} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label className="text-white">Product cost</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label className="text-white">Product image</label>
        <input type="text" className="form-control" name="img" value={props.img} onChange={ props.handleInputChange} />
      </div>
      <button onClick={ props.updateProductItem } className="btn btn-success mt-2"> Update </button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2">Cancel</button>
    </form>
  )
}

export default EditProductItem;