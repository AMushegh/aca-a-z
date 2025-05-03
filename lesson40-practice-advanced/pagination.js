const Pagination = {
  currentPage: null,
  pages: null,
  pagesCount: null,

  init(array, pageSize) {
    let result = [];
    let page = [];
    let count = 0;

    for (let i = 0; i < array.length; i++) {
      page.push(array[i]);
      count++;
      if (count === pageSize || i === array.length - 1) {
        result.push([...page]);
        page = [];
        count = 0;
      }
    }

    this.pages = result;
    this.currentPage = 0;
    this.pagesCount = result.length;
  },

  getPageItems() {
    return this.pages[this.currentPage];
  },

  nextPage() {
    if (this.currentPage === this.pagesCount - 1) {
      console.error("you are on last page: Invalid Operation Prev");
    } else {
      this.currentPage++;
      return this;
    }
  },

  prevPage() {
    if (this.currentPage === 0) {
      console.error("you are on first page: Invalid Operation Prev");
    } else {
      this.currentPage++;
      return this;
    }
  },

  firstPage() {
    this.currentPage = 0;
  },

  lastPage() {
    this.currentPage = this.pagesCount - 1;
  },

  goToPage(page) {
    const pageIndex = page - 1;
    if (pageIndex >= 0 && pageIndex <= this.pagesCount - 1) {
      this.currentPage = pageIndex;
    } else {
      console.error("Invalid Page: " + page);
    }
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);

console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one

console.log(Pagination.getPageItems()); // ["e", "f", "g", "h"]

Pagination.nextPage().nextPage(); // the ability to call chainable
console.log(Pagination.getPageItems()); //

Pagination.goToPage(3); // current page must be set to
console.log(Pagination.getPageItems()); //
Pagination.firstPage();
console.log(Pagination.getPageItems()); //
Pagination.lastPage();
console.log(Pagination.getPageItems()); //
