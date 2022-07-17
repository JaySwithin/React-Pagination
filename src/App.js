import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await axios.get(POSTS_URL);
    setPosts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts)

  return (
    <main className="main-container">
      <h1 className="text-center font-semibold p-2 text-xl">Hello world</h1>
      <Posts posts={posts} loading={loading} />
    </main>
  );
}

export default App;
