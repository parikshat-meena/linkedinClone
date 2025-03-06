import React, { Component } from "react";

// form's default behaviour is the to reload the page
// so, we need to prevent this in order to avoid reloading
// for this , we need to use event's preventDefault method
// But this is not required in angular forms because angular framework prevents the default behaviour of form
export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      term: "",
      error: "",
    };
  }
  onChanges = (e) => {
    this.setState({ error: "" });
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, term } = this.state;
    if (!fname || !lname) {
      // window.alert("field missing");
      this.setState({ error: "Fields are missing" });
      return;
    }
    console.log(e, this.state, "submit");
  };
  render() {
    const { fname, lname, term, error } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              placeholder="Enter first name"
              onChange={(e) => this.onChanges(e)}
              value={fname}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              placeholder="Enter last name"
              onChange={(e) => this.onChanges(e)}
              value={lname}
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
