
export default function Exemple({title,body,addNumer,index}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>

            <button onClick={()=>addNumer(index)}>click</button>
        </>
    )
    
}