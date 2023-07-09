// props: { author: "", content: ""}

export function Post(props){
    console.log(props)
    return (
        <div>
            <h1>{ props.author }</h1>
            <p>{ props.content }</p>
        </div>
    )
}