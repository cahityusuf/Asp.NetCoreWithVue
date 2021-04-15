import Main from "../pages/Main.vue";
import Post from "../pages/Post.vue";


export const routes = 
[
    {
        path: '/',
        component: Main
    },
    {
        path: '/:id',
        component: Post
    }
]

