import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

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

  // GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE POSTS PAGE


  return (
    <main className="main-container">
      <h1 className="text-center font-semibold p-2 text-xl">My Posts.</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </main>
  );
}

export default App;
