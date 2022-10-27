import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import AfterLogin from "./Feeds/AfterLogin";

function PostsByCatId(props) {
  const location = useLocation();
  const { cat_id, islogin, user } = location.state;
  const [items, setItems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);
  useEffect(() => {
    fetch(`https://localhost:44384/api/forum/allposts/${cat_id}`)
      .then((res) => res.json())
      .then((json) => {
        setDataisLoaded(true);
        setItems(json);
      });
  });
  if (!DataisLoaded) {
    return (
      <div>
        <h1>Wait for some time...</h1>
      </div>
    );
  }
  if (islogin) {
    return (
      <div>
        {items.map((item) => (
          <>
            <AfterLogin
              id={item.postID}
              name={item.authorName}
              title={item.title}
              body={item.body}
              likes={item.likes}
              dislikes={item.dislikes}
              views={item.viewsCount}
              userid={user}
            />
            <br />
          </>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <Navigate to={"/login"} />
      </div>
    );
  }
}

export default PostsByCatId;
