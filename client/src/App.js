import React from "react";
import "./App.css";
import PhoneGrid from "./Components/PhoneGrid";
import { fetchData } from "./actions/fetchData";
import { connect } from "react-redux";
import NavBar from "./Components/NavBar";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <div className="App container">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <NavBar />
        <div className="content">
          <PhoneGrid />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  phones: state.phones,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);
