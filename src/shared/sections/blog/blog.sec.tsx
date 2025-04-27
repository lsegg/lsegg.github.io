import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PostCom } from "../../components/post/post.com";
import { TitleCom } from "../../components/title/title.com";
import { FilterCom } from "../../components/filter/filter.com";
import postsData from "./posts-data.json";
import "./blog.scss";

export const BlogSection = forwardRef((_, ref) => {
  const navigate = useNavigate();
  const location = useLocation();
  const allPosts: any[] = postsData;

  const [filter, setFilter] = useState<string>("everything");
  const [displayCount, setDisplayCount] = useState<number>(2);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [posts, setProjects] = useState<any[]>([]);

  const filterOptions = ["everything", "web-development", "illustration"];

  // Update posts whenever filteredPosts or displayCount changes
  useEffect(() => {
    // If we're in the blog page, show all posts
    if (location.pathname === "/blog") {
      setProjects(filteredPosts);
    } else {
      setProjects(filteredPosts.slice(0, displayCount));
    }
  }, [filteredPosts, displayCount, location.pathname]);

  const handleChange = (value: string) => {
    setFilter(value);
    setDisplayCount(2); // Reset display count when filter changes

    if (value !== "everything") {
      const filtered = allPosts.filter((post) => post.category === value);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(allPosts);
    }
  };

  const handleLoadMore = () => {
    navigate("/blog");
  };

  // Initialize filtered posts
  useEffect(() => {
    setFilteredPosts(allPosts);
  }, []);

  useEffect(() => {
    const handleSetFilter = (event: CustomEvent) => {
      const { category } = event.detail;
      handleChange(category);
    };

    window.addEventListener("setBlogFilter", handleSetFilter as EventListener);

    return () => {
      window.removeEventListener(
        "setBlogFilter",
        handleSetFilter as EventListener
      );
    };
  }, []);

  useImperativeHandle(ref, () => ({
    setFilter: (value: string) => {
      handleChange(value);
    },
  }));

  const hasMoreProjects = posts.length < filteredPosts.length;
  const isBlogPage = location.pathname === "/blog";

  return (
    <section className="Blog" id="blog">
      <TitleCom content="Latest Posts" sectionClass="Blog-title" />
      <FilterCom
        filter={filter}
        onFilterChange={handleChange}
        options={filterOptions}
      />
      <div className="Blog-works">
        {posts.map((post) => {
          return (
            <PostCom
              category={post.category}
              title={post.title}
              imgIndex={post.imgIndex}
              description={post.description}
              type={post.type}
              key={post.title.replace(/\s+/g, "-").toLowerCase()}
            />
          );
        })}
      </div>
      {!isBlogPage && hasMoreProjects && (
        <div className="Blog-show-all">
          <button
            onClick={handleLoadMore}
            className="Blog-show-all-button paragraph-medium-bold isButton"
          >
            Show all posts
          </button>
        </div>
      )}
    </section>
  );
});
