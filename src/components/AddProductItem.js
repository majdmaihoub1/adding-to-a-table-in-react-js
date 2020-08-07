import React from 'react'

const AddProductItem = props => {
  return (
 
    <form onSubmit={ props.addProductItem }>
         < h2  style={{padding:'20px 20px',color:'green'}}> adding and updating products </h2>
      <div className="form-group">
        <label>Product name</label>
        <input type="text" className="form-control" name="product" value={props.product} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Product cost</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
      </div>
       <div className="form-group">
        <label>Product image</label>
        <input type="text" className="form-control" name="img" value={props.img} onChange={ props.handleInputChange} />
      </div>
      <button className="btn btn-success mt-2"> Add product  </button>
    </form>
  )
}

export default AddProductItem;