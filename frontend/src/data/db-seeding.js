const fs = require("fs");
const dayjs = require("dayjs");

const { faker } = require("@faker-js/faker");
const postNb = 25;
const authorNb = 5;
const categoryNb = 10;

const authors = [];
const categories = [];
const posts = [];

function createAuthors(authorNb) {
  for (let i = 0; i < authorNb; i++) {
    const author = {
      id: i,
      name: faker.name.fullName(),
    };

    authors.push(author);
  }

  return authors;
}

function createCategories(categoryNb) {
  for (let i = 0; i < categoryNb; i++) {
    const category = {
      id: i,
      label: faker.commerce.department(),
    };

    categories.push(category);
  }

  return categories;
}

function createPost(postNb) {
  for (let i = 0; i < postNb; i++) {
    const authorRand = Math.floor(Math.random() * authors.length);
    const categoryRand = Math.floor(Math.random() * categories.length);

    const post = {
      id: i,
      author: authors[authorRand].name,
      date: dayjs(faker.date.recent(25)).format("MMM D, YYYY"),
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(25),
      text: faker.lorem.paragraphs(15),
      category: categories[categoryRand].label,
      image: faker.image.abstract(250, 100),
    };

    posts.push(post);
  }

  return posts;
}

(async () => {
  const generatedAuthors = createAuthors(authorNb);
  const generatedCategories = createCategories(categoryNb);
  const generatedPosts = createPost(postNb);

  let authorsJson = JSON.stringify(generatedAuthors);
  let categoriesJson = JSON.stringify(generatedCategories);
  let postsJson = JSON.stringify(generatedPosts);

  fs.writeFile("blogPosts.json", postsJson, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  fs.writeFile("author.json", authorsJson, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  fs.writeFile("categories.json", categoriesJson, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
})();
