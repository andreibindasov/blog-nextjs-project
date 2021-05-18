import AllPosts from '../../components/posts/all-posts'

import { getAllPosts } from '../../lib/posts-util'

import Head from 'next/head'

function AllPostsPage(props) {
    return (
        <>
            <Head>
                <title>Conspiracy Facts | All posts</title>
                <meta 
                    name="description" 
                    content="The World is under the Rule of Psychopaths" 
                />
            </Head>
            <AllPosts posts={props.posts}/>
        </>
    )
}

export function getStaticProps() {
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        },
        revalidate: 1800
    }
}

export default AllPostsPage