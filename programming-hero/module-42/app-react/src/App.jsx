import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Blogs from "./component/Main/Blogs";
import Bookmarks from "./component/Main/Bookmarks";

function App() {
  // state for bookmark
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (blog)=>{
    const addingBookmark = [...bookmarks, blog];
    setBookmarks(addingBookmark);
  }

  // state for reading-time
  const [reading, setReading] = useState(0);
  const handleReadig = (time, id)=>{
    const sum = reading + time;
    setReading(sum)

    // remove readed bookmark
    const remain = bookmarks.filter(item => item.id !== id);
    setBookmarks(remain)
  }


  return (
    <div className="container mx-auto">
      <Header></Header>
      <main className="flex lg:flex-row flex-col gap-12 my-8 mx-4">
        <Blogs handleBookmark={handleBookmark} handleReadig={handleReadig}></Blogs>
        <Bookmarks bookmarks={bookmarks} reading={reading}></Bookmarks>
      </main>
    </div>
  );
}

export default App;
