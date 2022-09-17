import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const SharedLayout = ({
  resetFiltering,
  searchPosts,
  handleSearch,
  search,
}) => {
  return (
    <>
      <Navbar
        resetFiltering={resetFiltering}
        searchPosts={searchPosts}
        handleSearch={handleSearch}
        search={search}
      />
      <Outlet />
    </>
  );
};

export default SharedLayout;
