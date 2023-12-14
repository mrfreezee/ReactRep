import { useEffect, useState } from "react"
import { HeaderPages } from "../../pages/HeaderPages/HeaderPages"
import { useParams } from "react-router-dom"

type BlogPostType = { 
    "id": number 
    "image": string 
    "text": string 
    "date": string 
    "lesson_num": number 
    "title": string 
    "description": string 
    "author": number 
    name: string
}

export const SinglePost = () =>{
    const [data, setData] = useState<BlogPostType>()
    const {id} = useParams()

    useEffect(() =>{
        fetch('https://studapi.teachmeskills.by/blog/posts/' + id)
        .then(res => res.json())
        .then(res => {
            setData(res)
        })
    }, [])

    return(<>
        <HeaderPages name={'Single'}/>
        <div>
            Id: {data?.id}
        </div>
        </>
    )
}