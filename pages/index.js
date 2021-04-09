import { Fragment } from 'react'
import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/FeaturedPosts'

const DUMMY_POSTS = [
    {
        slug:'prince-phillip',
        title:'Burn in Hell',
        image:'_Phillip.jpg',
        excerpt:'If I were reincarnated, I would wish to be returned to Earth as a killer virus to lower human population levels.', 
        date: '04-09-2021'
    },
    {
        slug:'prince-phillip-1',
        title:'Burn in Hell',
        image:'_Phillip.jpg',
        excerpt:'If I were reincarnated, I would wish to be returned to Earth as a killer virus to lower human population levels.', 
        date: '04-09-2021'
    },
    {
        slug:'prince-phillip-2',
        title:'Burn in Hell',
        image:'_Phillip.jpg',
        excerpt:'If I were reincarnated, I would wish to be returned to Earth as a killer virus to lower human population levels.', 
        date: '04-09-2021'
    },
    {
        slug:'prince-phillip-3',
        title:'Burn in Hell',
        image:'_Phillip.jpg',
        excerpt:'If I were reincarnated, I would wish to be returned to Earth as a killer virus to lower human population levels.', 
        date: '04-09-2021'
    }
]

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>
    )
}

export default HomePage