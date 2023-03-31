import {allmyPosts as posts} from "./post.js";

// console.log(posts);

posts.forEach(post =>{
    console.log(post);
});

const filteredPost = posts.filter(post =>{
     return post.userid === 2;
});

filteredPost.forEach(post =>{
    console.log("===============================");
    console.log(post);
    console.log("===============================");
});