import React from "react";
import FiltersMenu from "../../components/shared/FiltersMenu/FiltersMenu";
import BooksList from "../../components/structure/BooksList/BooksList";

function BrowseBooks() {
  return (
    <div className="container__browseBooks">
      <FiltersMenu />
      <BooksList />
    </div>
  );
}

export default BrowseBooks;
