import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imports data files/API
import data from "./data/blogPosts.json";

// Imports components files
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Imports SCSS files
import "./app.scss";

const App = () => {
  const [posts, setPosts] = useState(data);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const filterCategories = (category) => {
    const newPosts = data.filter((post) => post.category === category);

    setPosts(newPosts);
    setCategory(category);
    setAuthor("");
  };

  const filterAuthors = (author) => {
    const newPosts = data.filter((post) => post.author === author);

    setPosts(newPosts);
    setAuthor(author);
    setCategory("");
  };

  const resetFiltering = () => {
    setPosts(data);
    setCategory("");
    setAuthor("");
    setSearch("");
  };

  const handleSearch = (search) => {
    setSearch(search);
  };

  const searchPosts = (e) => {
    e.preventDefault();
    const newPosts = data.filter(
      (post) =>
        post.category === search ||
        post.author.includes(search) ||
        post.date.includes(search) ||
        post.title.includes(search) ||
        post.description.includes(search) ||
        post.text.includes(search)
    );

    setPosts(newPosts);
  };

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/blog"
            element={
              <SharedLayout
                resetFiltering={resetFiltering}
                searchPosts={searchPosts}
                handleSearch={handleSearch}
                search={search}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  posts={posts}
                  category={category}
                  author={author}
                  search={search}
                  filterCategories={filterCategories}
                  resetFiltering={resetFiltering}
                />
              }
            />
            <Route
              path="posts/:postId"
              element={<SinglePost filterAuthors={filterAuthors} />}
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
