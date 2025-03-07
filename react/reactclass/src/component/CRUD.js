import React, { Component } from "react";
import axios from "axios";
export class CRUD extends Component {
  URL = "http://127.0.1:4000/product";

  componentDidMount() {
    this.getData();
    // this.saveData();
    const id = "67cb0b31038bf432fec1a7dc";
    const obj = { name: "iPhone 16", price: "160000", region: "mumbai" };
    this.updateData(id, obj);
    // this.deleteItem(id);
    // console.log(res, "res in get data");
  }

  getData() {
    axios.get(this.URL).then((res) => {
      console.log(res.data, "res ");
    });
  }

  saveData() {
    const obj = { name: "vivo s12", price: "60000", region: "delhi" };

    axios.post(this.URL, obj).then((res) => {
      console.log(res.data, "post response");
      this.getData();
    });
  }

  //promise().then((data)=>{})
  //
  updateData(id, data) {
    axios.put(`${this.URL}/${id}`, data).then((res) => {
      console.log(res.data, "post response");
      //   this.getData();
    });
    fetch(this.URL).then((res) => console.log(res, "getting from fetch api"));
  }

  deleteItem(id) {
    axios.delete(`${this.URL}/${id}`).then((res) => {
      console.log(res.data, "delete call");
    });
    this.getData();
  }

  render() {
    return <div>CRUD</div>;
  }
}

export default CRUD;
