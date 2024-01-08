import blogData from "../data/blog"




function About({ image="https://via.placeholder.com/215", about }) {
    console.log(image)
    console.log(about)
    return (
        <aside>
            <img src={blogData.image} alt="blog logo"></img>
            <p>{blogData.about}</p>
        </aside>
    )
}

export default About;