import React, { useEffect, useState } from "react";
import AfterLogin from "./Feeds/AfterLogin";
import { useLocation } from "react-router-dom";

function PostbySearchKeyword(props) {
  const location = useLocation();
  const { key, user } = location.state;

  const [items, setItems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);

  // console.log(key)
  useEffect(() => {
    fetch(`https://localhost:44384/api/forum/allpostsbykeyword/${key}`)
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
  } else {
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
  }
}

export default PostbySearchKeyword;
