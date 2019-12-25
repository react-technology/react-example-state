import React, { Component } from 'react';
import './App.css';
import Product from './component/Product'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          id: 1,
          name: "Iphone X",
          price: "20.999.999",
          image: "https://didongthongminh.vn/upload_images/2017/10/iphoneX-silver.png",
          status: true
        },
        {
          id: 2,
          name: "Galaxy Note 10",
          price: "25.999.999",
          image: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008711602926121_SS-note-10-pl-den-1-1.png",
          status: true
        },
        {
          id: 3,
          name: "Vsmart Live",
          price: "2.999.999",
          image: "https://cdn.tgdd.vn/Products/Images/42/209553/vsmart-live-6gb-white-400x460.png",
          status: true
        }
      ],
      isActive: true
    }
  }

  onAddProduct = () => {
    console.log(this.refs.name.value) // refs: lấy dữ liệu từ <input/> or <textarea/>
  }

  onSetState = () => {
    /*    if (this.state.isActive === true) {
         this.setState({
           isActive: false
         });
       } else {
         this.setState({
           isActive: true
         })
       } */
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {

    /*  var products = [
       {
         id: 1,
         name: "Iphone X",
         price: "20.999.999",
         image: "https://didongthongminh.vn/upload_images/2017/10/iphoneX-silver.png",
         status: true
       },
       {
         id: 2,
         name: "Galaxy Note 10",
         price: "25.999.999",
         image: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008711602926121_SS-note-10-pl-den-1-1.png",
         status: true
       },
       {
         id: 3,
         name: "Vsmart Live",
         price: "2.999.999",
         image: "https://cdn.tgdd.vn/Products/Images/42/209553/vsmart-live-6gb-white-400x460.png",
         status: true
       }
     ] */

    let elements = this.state.products.map((product, index) => {
      if (this.state.isActive === true) {
        if (product.status) {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{product.name}</td>
              <td>
                <span className="label label-success">{product.price} VND</span>
              </td>
            </tr>
          )
        }
      }
    })

    return (
      <div>

        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="row">

            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                {elements}
              </tbody>
            </table>

            <button type="button" class="btn btn-warning" onClick={this.onSetState}>Active: {this.state.isActive == true ? 'true' : 'false'}</button>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
