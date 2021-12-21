import "./styles.css"

function Post(props) {
    return (
        <article>
            <h2>{props.title}</h2>

            <small>Leia em {props.readingTime} {props.readingTime === 1 ? "minuto" : "minutos"}.</small>

            {props.children}
        </article>
    )
}

export default Post;