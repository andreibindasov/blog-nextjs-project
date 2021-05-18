import { Fragment } from 'react'
import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/FeaturedPosts'

import { getFeaturedPosts } from '../lib/posts-util'

import Head from 'next/head'

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Andrei's Blog | Conspiracy facts</title>
                <meta 
                    name="description" 
                    content="The term Conspiracy Theory is for those who are completely ignorant. Deal with CONSPIRACY FACTS!" 
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 1800
    }
}

export default HomePage