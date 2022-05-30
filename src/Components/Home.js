import React from "react";
import "./home.css";
import { myArray } from "./GlobalArray";
import { connect } from "react-redux";
import Header from "../Router/Header";
import { Redirect } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="homepic">
          <div style={{ paddingTop: 42 }}>
            <h1
              style={{
                textAlign: "center",
                fontStyle: "italic",
                textDecoration: "underline",
                color: "#ffb773",
              }}
            >
              {" "}
              This Website Created For Store Your Bookmarks Securely.
            </h1>
            <br />
            <br />
            <p
              style={{
                color: "white",
                textIndent: "50px",
                textAlign: "justify",
                letterSpacing: "2px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              {/* <span
                style={{
                  color: "#ffb773",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <p>
         */}
              You Can Store Your Bookmarks! If You Want To Store Your Bookmarks
              and Links Securely You Can Simple Click On The BookMark Button and
              Inside Enter Your Bookmarks Link and Also give a Reference Name To
              Make It Easy To Understand.Here Bookmarks Save According Your
              Email Id Reference If You Are Store Your Bookmarks You Should Only
              See Your Bookmarks In That Email Only. This Makes Your Bookmarks
              Secure and Easy To Use AnyTime Without Any Failure.
            </p>
            <br />
            <p
              style={{
                color: "white",
                textIndent: "50px",
                textAlign: "justify",
                letterSpacing: "2px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              {/* <span
                style={{
                  color: "#ffb773",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                12.2.2 ANALYTICAL ABILITY & LOGICAL REASONING: (40 questions)
              </span>{" "} */}
              You Can Also Give Feedback And Share Your Experience With Us And
              Also Give Suggestions Or Issue If You Facing To Moving Forward.
              This Website Is Very Easy To Use And Makes Your Life Easier To Get
              Reference.
            </p>
            <br />
            <p
              style={{
                color: "white",
                textIndent: "50px",
                textAlign: "justify",
                letterSpacing: "2px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              {/* <span
                style={{
                  color: "#ffb773",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                12.2.3 COMPUTER AWARENESS: (10 questions)
              </span>{" "}
              • Computer Basics: Organization of a computer, Central Processing
              Unit (CPU), structure of instructions in CPU, input/output
              devices, computer memory, and back-up devices. • Data
              Representation: Representation of characters, integers and
              fractions, binary and hexadecimal representations, binary
              arithmetic: addition, subtraction, multiplication, division,
              simple arithmetic and two’s complement arithmetic, floating point
              representation of numbers, Boolean algebra, truth tables, Venn
              diagrams.{" "} */}
              If You Want To Use This Website You Must Be Logged In. If You Have
              Account Then Simply Click On The Login Button Enter Your Email And
              Password And Just Click On Login. If You Logged In Successfully
              Then You Can't See Login/SignUp Button Any More Instead You Can
              See Bookmark/Feedback/Logout Button.
            </p>
            <br />
            <p
              style={{
                color: "white",
                textIndent: "50px",
                textAlign: "justify",
                letterSpacing: "2px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              {/* <span
                style={{
                  color: "#ffb773",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                12.2.4 GENERAL ENGLISH: (20 questions)
              </span>{" "}
              Questions in this section will be designed to test the candidates’
              general understanding of the English language. There will be
              questions on the following topics: Comprehension, vocabulary,
              Basic English Grammar (like usage of correct forms of verbs,
              prepositions and articles), word power, synonyms and antonyms,
              meaning of words and phrases, technical writing. */}
              If You Don't Have Any Account Then Simply Click On SignUp Button
              And Enter Email And Password And Click On Signup Button It Create
              An Account Which Is Going To Be Saved In Database And Any Time You
              Can Login By using This Account.
            </p>
            <br />
            <p
              style={{
                color: "white",
                textIndent: "50px",
                textAlign: "justify",
                letterSpacing: "2px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              {/* <span
                style={{
                  color: "#ffb773",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                12.2.3 COMPUTER AWARENESS: (10 questions)
              </span>{" "}
              • Computer Basics: Organization of a computer, Central Processing
              Unit (CPU), structure of instructions in CPU, input/output
              devices, computer memory, and back-up devices. • Data
              Representation: Representation of characters, integers and
              fractions, binary and hexadecimal representations, binary
              arithmetic: addition, subtraction, multiplication, division,
              simple arithmetic and two’s complement arithmetic, floating point
              representation of numbers, Boolean algebra, truth tables, Venn
              diagrams.{" "} */}
              If You Want To Use This Website You Must Be Logged In. If You Have
              Account Then Simply Click On The Login Button Enter Your Email And
              Password And Just Click On Login. If You Logged In Successfully
              Then You Can't See Login/SignUp Button Any More Instead You Can
              See Bookmark/Feedback/Logout Button.
            </p>
            <br />
            <p
              style={{
                color: "white",
                textIndent: "50px",
                textAlign: "justify",
                letterSpacing: "2px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              {/* <span
                style={{
                  color: "#ffb773",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                12.2.4 GENERAL ENGLISH: (20 questions)
              </span>{" "}
              Questions in this section will be designed to test the candidates’
              general understanding of the English language. There will be
              questions on the following topics: Comprehension, vocabulary,
              Basic English Grammar (like usage of correct forms of verbs,
              prepositions and articles), word power, synonyms and antonyms,
              meaning of words and phrases, technical writing. */}
              If You Don't Want To Use Your Account Any Time You Can Simply
              Select Logout Pannel And Click on Logout Button To Logged Out From
              Your Account And Then You Can be Redirect On Login/Signup Button
              Starting Page. In The Logout Section You Can Also See Your Login
              Email Id Which Is Dynamic Comming From Database.
            </p>

            <br />
            <p
              style={{
                fontSize: 20,
                textIndent: "50px",
                textAlign: "justify",
                letterSpacing: "2px",
                marginLeft: "100px",
                marginRight: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffb773",
              }}
            >
              {/* <span
                style={{
                  color: "#ffb773",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                12.2.4 GENERAL ENGLISH: (20 questions)
              </span>{" "}
              Questions in this section will be designed to test the candidates’
              general understanding of the English language. There will be
              questions on the following topics: Comprehension, vocabulary,
              Basic English Grammar (like usage of correct forms of verbs,
              prepositions and articles), word power, synonyms and antonyms,
              meaning of words and phrases, technical writing. */}
              !! Thanks !! Developed By Mohit Kumar Sharma
            </p>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.token,
    myArray: state.myArray,
  };
};

export default connect(mapStateToProps)(Home);
