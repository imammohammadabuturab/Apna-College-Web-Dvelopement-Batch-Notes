// Thread / Twitter Post
// Create an object literal for the properties of thread/ twitter post which includes -
// username
// content
// likes
// reposts
// tags

const post = {
    username: "Imam Mohammad Abuturab",
    content: "This is my #FirstPost",
    likes: 150,
    reposts: 5,
    tags: ["@ApnaCollege", "@Delta"]
};

console.log(post);

// get values
console.log(post["likes"]);
console.log(post.tags);
console.log(post.tags[0]);