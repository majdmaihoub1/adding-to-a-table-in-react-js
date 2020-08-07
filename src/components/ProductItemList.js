import React from 'react';

  const ProductItemList = (props) => {
    return (
      <React.Fragment>
             <h2 style={{paddingBottom:'10px'}}>products list</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product</th>
                  <th>Cost</th>
                  <th>image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.productItems.length > 0 ? (
                  props.productItems.map((productItem) => (
                    <tr key={productItem.id}>
                      <td>{productItem.id}</td>
                      <td>{productItem.product}</td>
                      <td>{productItem.cost+' SYP'}</td>
                      <td>
                        <img src={productItem.img} alt="product" />
                      </td>
                      <td>
                        <button
                          className="btn btn-primary ml-2"
                          onClick={() => props.editProductItem(productItem)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={() =>
                            props.deleteProductItem(productItem.id)
                          }
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-info ml-2"
                          onClick={() => props.boughtProductItem(productItem)}
                        >
                          {productItem.status ? "bought" : "pending"}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No product avaliable</td>
                  </tr>
                )}
              </tbody>
            </table>
      </React.Fragment>
    );
  }


export default ProductItemList;


