import React, { useEffect, useState } from 'react'
import { PostCard, Container } from '../Index'
import services from '../../auth/config'
import "../../App.css"

function Allpost() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        services.getposts([]).then((item) => {
            if (item) {
                setPosts(item.documents)
            }
        })
    }, [])

    return (
        <>
            <Container>
                <div className='home-color px-5 pt-3 '>
                    {posts.map((item) =>
                    (
                        <div key={item.$id} >
                            <PostCard  {...item} fileId={item.featuredImg} name={item.name} id={item.$id} className="all-post-card" />
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Allpost
