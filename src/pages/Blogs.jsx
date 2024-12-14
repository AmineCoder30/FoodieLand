import React from "react";
import { NewsletterBanner, OtherRecipe, BlogList } from "../components/layout";
import { Pagination } from "../components/ui";
function Blogs() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="px-2 md:px-0">
      <NewsletterBanner background="bg-transparent" />
      <div className="flex gap-10 container mx-auto">
        <BlogList />
        <div>
          <OtherRecipe />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />
      <NewsletterBanner background="bg-light-blue" />
    </div>
  );
}

export default Blogs;
