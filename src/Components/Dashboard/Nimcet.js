import React, { useEffect, useState } from "react";
import "./nimcet.css";
import axios from "axios";
import Card from "../../Reusable/Card";
import Header from "../../Router/Header";
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import { connect } from "react-redux";
import { BookmarksSharp } from "@material-ui/icons";

const Nimcet = (props) => {
  const [data, setData] = useState(null);
  const [bookmark, setBookmark] = useState({
    url: "",
    catagory: "",
    email: null,
  });
  const [bookmarks, setBookmarks] = useState({
    url: "",
    catagory: "",
    email: "",
  });

  const [insert, setInsert] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditId, setIsEditId] = useState(null);


  console.log(props);
  useEffect(() => {
    axios
      .get(
        "https://streamy-325306-default-rtdb.firebaseio.com/bookmark/.json"
      )
      .then((res) => {
        const fetchorders = [];
        for (let key in res.data) {
          fetchorders.push({ ...res.data[key], id: key });
        }
        console.log(fetchorders, "++++++++");
        setData(fetchorders);
      })
      .catch((err) => console.log(err));
      setIsEdit(false);
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://streamy-325306-default-rtdb.firebaseio.com/bookmark/.json"
      )
      .then((res) => {
        const fetchorders = [];
        for (let key in res.data) {
          fetchorders.push({ ...res.data[key], id: key });
        }
        console.log(fetchorders, "++++++++");
        setData(fetchorders);
      })
      .catch((err) => console.log(err));
    setInsert(false);
  }, [insert]);
  const handleChange = (e) => {
    setBookmark({
      ...bookmark,
      [e.target.name]: e.target.value,
      email: props.email,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookmark.catagory != "" && bookmark.url != "") {
      var res = axios
        .post(
          `https://streamy-325306-default-rtdb.firebaseio.com/bookmark.json`,
          bookmark
        )
        .then((res) =>
          res.status == 200 ? (
            <>{(setBookmark({ url: "", catagory: "" }), setInsert(true))}</>
          ) : (
            console.log("no")
          )
        )
        .catch((res) => res);
    }
  };
  const handleDelete = (data) => {
    console.log(data);
    axios
      .delete(
        `https://streamy-325306-default-rtdb.firebaseio.com/bookmark/${data}.json`
      )
      .then((response) => {
        setInsert(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };
  const EditHandle=(data)=>{
    setIsEdit(true);
    setIsEditId(data.id);
    setBookmarks({  ...bookmarks,url: data.url,
    catagory: data.catagory,
    email: data.email})
    // axios
    // .put(
    //   `https://compucom-project-2-default-rtdb.firebaseio.com/bookmark/${data.id}.json`,bookmarks
    // )
    // .then((response) => {
    //   setInsert(true);
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    // console.log("Hello");
  }
  const handleEditId=(e)=>{
    console.log(e.target.name,e.target.value);
    setBookmarks({
      ...bookmarks,
      [e.target.name]: e.target.value,
      email: props.email,
    });

  }
  const EditHandleClick=(data)=>{
  axios
    .put(
      `https://streamy-325306-default-rtdb.firebaseio.com/bookmark/${data.id}.json`,bookmarks
    )
    .then((response) => {
      setInsert(true);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    setBookmarks({...bookmarks,catagory:"",url:"",email:""});
    setIsEdit(false);
    setIsEditId(null);

  }
  console.log(bookmarks.catagory);
  console.log(isEdit);  
  return (
    <>
      <Header />

      <div className="nimcetfullhandle">
        <div style={{ paddingTop: 42 }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: 5,
              marginTop: 5,
              color: "white",
            }}
          >
            Save Bookmarks
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSubmit}>
           
              <input
                placeholder="Enter Category"
                value={bookmark.catagory}
                name="catagory"
                style={{ width: 300, padding: 10, marginRight: 10 }}
                onChange={(e) => handleChange(e)}
              ></input>   <input
              placeholder="Enter Your Bookmarks Here"
              value={bookmark.url}
              name="url"
              style={{ width: 300, padding: 10, marginRight: 10 }}
              onChange={(e) => handleChange(e)}
            ></input>{" "}
              <button
                type="submit"
                style={{
                  paddingRight: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
                }}
              >
                Add
              </button>
            </form>
          </div>
          <div style={{ width: "100%" }}>
            <div
              style={{
                marginTop: 5,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              {data
                ? data.map((data, index) => {
                    return data.email == props.email ? (
                      <div
                        style={{
                          display: "flex",

                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                      {data.id==isEditId? <div
                          key={index}
                          style={{
                            border: "1px solid orange",
                            backgroundColor: "#705e2d",
                            marginTop: 5,
                            width: "100%",
                            display: "flex",
                            // backgroundColor: "red",
                            paddingBottom: 5,
                            paddingTop: 5,
                          }}
                        >
                    
                          <input
                placeholder="Enter Category"
                value={bookmarks.catagory}
                name="catagory"
                style={{ width: 300, padding: 10, marginRight: 10 }}
                onChange={(e) => handleEditId(e)}
              ></input>
                     <input
                placeholder="Enter Url"
                value={bookmarks.url}
                name="url"
                style={{ width: 300, padding: 10, marginRight: 10 }}
                onChange={(e) => handleEditId(e)}
              ></input>
                     
                        </div>:<div
                          key={index}
                          style={{
                            border: "1px solid orange",
                            backgroundColor: "#705e2d",
                            marginTop: 5,
                            width: "100%",
                            display: "flex",
                            // backgroundColor: "red",
                            paddingBottom: 5,
                            paddingTop: 5,
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "orange",
                              marginLeft: 20,
                              marginRight: 20,
                            }}
                          >
                            {data.catagory}
                          </div>{" "}
                          <a
                            style={{
                              color: "white",
                              marginLeft: 10,
                              marginRight: 10,
                            }}
                            href={data.url}
                            target="_blank"
                          >
                            {data.url}
                          </a>
                        </div>}
                        
                     {   isEdit==false?<div
                          style={{
                            color: "wheat",
                            backgroundColor: "red",
                            paddingTop: 2,
                            paddingBottom: 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: 5,
                          }}
                          onClick={()=>EditHandle(data)}
                        >
                          <AiFillEdit />
                        </div>:data.id==isEditId?<button
                          style={{
                            color: "black",
                            // backgroundColor: "wheat",
                            paddingTop: 2,
                            paddingBottom: 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: 5,
                          }}
                          onClick={()=>EditHandleClick(data)}
                        >
                          Edit
                        </button>: <div
                          style={{
                            color: "wheat",
                            backgroundColor: "red",
                            paddingTop: 2,
                            paddingBottom: 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: 5,
                          }}
                          onClick={()=>EditHandle(data)}
                        >
                          <AiFillEdit />
                        </div>


                      }
                      <div
                          style={{
                            color: "wheat",
                            backgroundColor: "red",
                            paddingTop: 2,
                            paddingBottom: 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: 5,
                          }}
                          onClick={() => handleDelete(data.id)}
                        >
                          <AiFillDelete />
                        </div>
                      </div>
                    ) : null;
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

export default connect(mapStateToProps)(Nimcet);
