import React from 'react';
import ProductItemList from './components/ProductItemList';
import AddProductItem from './components/AddProductItem';
import './App.css';
import EditProductItem from './components/EditProductItem';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      product: '',
      cost: '',
      img: '',
      status: false,
      productItem: {},
      productItems: [],
      editing: false
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteProductItem = this.deleteProductItem.bind(this);
    this.boughtProductItem = this.boughtProductItem.bind(this);
    this.addProductItem = this.addProductItem.bind(this);
    this.editProductItem = this.editProductItem.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.updateProductItem = this.updateProductItem.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    this.setState({
      [name]:value
    })
  }

  addProductItem(event){
    event.preventDefault()
    if (!this.state.product) return;
    const productItem = {
      id: this.state.productItems.length + 1,
      product: this.state.product,
      cost: this.state.cost,
      img: this.state.img,
      userId: this.state.userId,
      statu: this.state.status
    };

    console.log(productItem);
    this.setState({
      product: '',
      cost: '',
      img:'',
      productItem: productItem,
      productItems: [...this.state.productItems, productItem]
    })
    console.log(this.state.productItems);
  }

  deleteProductItem(id) {
    const productItems = this.state.productItems.filter( item => item.id !== id );
    this.setState({productItems: productItems});
    if(this.state.editing === true) {
      window.location.reload();
    }
  }

  boughtProductItem(currentProduct) {
    const updatedCurrentProduct = Object.assign({}, currentProduct, { status: true });
    const productItems = this.state.productItems.map((productItem, index) => (productItem.id === currentProduct.id ? updatedCurrentProduct : productItem));
    this.setState({productItems: productItems})
  }

  editProductItem(productItem) {
    this.setEditing(true);
    this.setState({
      product:productItem.product,
      cost:productItem.cost,
      img:productItem.img,
      productItem: productItem
    });
    console.log(productItem);
  }

  setEditing(value) {
    if(typeof value !== 'boolean') { throw " This value must either be true or false"}
    this.setState({
      editing: value
    })
  }

  updateProductItem(event) {
    event.preventDefault();
    const updatedProduct = this.state.product;
    const updatedCost = this.state.cost;
    const updateImg = this.state.img;
    const updatedProductItem = Object.assign({}, this.state.productItem, { product: updatedProduct, cost: updatedCost , img : updateImg })
    const productItems = this.state.productItems.map((productItem) => (productItem.id === this.state.productItem.id ? updatedProductItem : productItem));
    this.setState({ product:'', cost: '',img:'', productItems: productItems});
  }

  render() {
    const { cost, product, img, productItems, editing } = this.state;
      return (
        
          < div className = "container" >
            < div className = "App" >
          <div className="row App-main">
            <ProductItemList 
              productItems= {productItems} 
              deleteProductItem={this.deleteProductItem}
              boughtProductItem={this.boughtProductItem}
              editProductItem={this.editProductItem}
            />
          </div>
          <div className="row App-main forms ">
          { 
            editing  ? (
            <EditProductItem 
             product={this.state.product}
             cost={this.state.cost} 
             img={this.state.img}
             handleInputChange={this.handleInputChange}
             setEditing={this.setEditing}
             updateProductItem={this.updateProductItem}
            />
            ) : (
            <AddProductItem 
              product={this.state.product}
              cost={this.state.cost} 
               img = {
                 this.state.img
               }
              handleInputChange={this.handleInputChange} 
              addProductItem={this.addProductItem}
            />
            )
          }
          </div>
        </div>
        </div>
      );
    }
}




export default App;
