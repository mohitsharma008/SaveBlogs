import React, { useContext } from "react";
import "./nimceton.css";
// const NimcetFive = () => {
//   const value = useContext(BlogContext);
//   console.log(value);
//   return (
//     <>
//       <div className="nimcetonfullhandle">
//         <div style={{ paddingTop: 40 }}>
//           <h1>105 Here Test Start</h1>
//         </div>
//       </div>
//     </>
//   );
// };

class NimcetFive extends React.Component {
  // // static contextType = BlogContext;
  // // constructor() {
  //   super();
  //   this.state = {
  //     arr: null,
  //   };
  // }
  // componentDidMount() {
  //   const value = this.context;
  //   this.setState({ arr: value });
  // }

  // savefrom = () => {
  //   console.log("fds");
  //   if (this.state.arr != null) {
  //     this.state.arr[0][1].a = true;
  //   }
  // };
  render() {
    return (
      <>
        {/* {this.state.arr ? console.log(this.state.arr) : null} */}
        <div className="nimcetonfullhandle">
          <div style={{ paddingTop: 40 }}>
            <h1>105 Here Test Start</h1>
            <button onClick={() => this.savefrom()}>change</button>
          </div>
        </div>
      </>
    );
  }
}

export default NimcetFive;
