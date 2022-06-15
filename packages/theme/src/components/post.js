import React from "react"
import { connect } from "frontity"
import dayjs from "dayjs"

const Post = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const formattedDate = dayjs(post.date).format("DD MM YYYY")

    return (
        <div>
            <h2>{post.title.rendered}</h2>
            <p>
                <strong>Publicado el: </strong>
                {/* {post.date} */}
                {formattedDate}
            </p>
            <hr />
            <p>
                <strong>ID del Autor: </strong>
                {post.author}
            </p>
            <hr />
            <p>
                <strong>Nombre del Autor: </strong>
                {author.name}
            </p>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered}} />
        </div>
    )
}

export default connect (Post)