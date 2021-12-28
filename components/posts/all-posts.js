import classes from './all-posts.module.css';
import PostGrid from './posts-grid';

function AllPosts(props) {
    return <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostGrid posts={props.posts} />
    </section>
}

export default AllPosts;