import Article from "./Article";



function ArticleList({ posts }) {
    console.log(posts)
    const articles = posts.map((post) => (
        <Article key={post.id} post={post}/>
    ))
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;