import React from "react";

const withStore = WrappedComponent => {
  class HOC extends React.Component {
    state = {
      localStorageAvailable: false
    };

    componentDidMount() {
      this.checkLOcalStorageExists();
    }

    checkLOcalStorageExists = () => {
      const testKey = "test";
      try {
        localStorage.setItem(testKey, testKey); //localStorage.setItem("clave", "valor")
        localStorage.removeItem(testKey);
        this.setState({ localStorageAvailable: true });
      } catch (error) {
        console.log("HOC Error => ", error);
        this.setState({ localStorageAvailable: false });
      }
    };

    load = key => {
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key);
      }
    };

    save = (key, data) => {
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    };

    remove = key => {
      if (this.state.localStorageAvailable) {
        //
        localStorage.remove(key);
      }
    };

    //render
    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  } //end class

  return HOC;
}; //end hoc

export default withStore;
