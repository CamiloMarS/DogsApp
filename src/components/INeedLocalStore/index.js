import React from "react";
import withStore from "../../HOC/withStoreHoc";

class ComponentNeedingStorage extends React.Component {
  state = {
    userName: "",
    favoriteMovie: ""
  };

  componentDidMount() {
    let userName = this.props.load("userName");
    let favoriteMovie = this.props.load("favoriteMovie");

    if (!userName || !favoriteMovie) {
      this.props.reallyLongApiCall().then(user => {
        this.props.save(userName, user.userName || "");
        this.props.save(favoriteMovie, user.favoriteMovie || "");
        this.setState({ userName, favoriteMovie });
      });
    } else {
      this.setState({ userName, favoriteMovie });
    }
  }

  render() {
    const { userName, favoriteMovie } = this.state;
    if (!userName || !favoriteMovie) return <div>Loading ...</div>;
    return (
      <div
        style={{ backgroundColor: "#ccc", padding: "5px", textAlign: "center" }}
      >
        I'm {userName}, my favorite movie is {favoriteMovie}
      </div>
    );
  }
} //end class

const WrappedComponent = withStore(ComponentNeedingStorage);

export default WrappedComponent;
