import AllPosts from '../../components/posts/all-posts'

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
    },
    {
        slug:'prince-phillip-4',
        title:'Burn in Hell',
        image:'_Phillip.jpg',
        excerpt:'If I were reincarnated, I would wish to be returned to Earth as a killer virus to lower human population levels.', 
        date: '04-09-2021'
    },
    {
        slug:'prince-phillip-5',
        title:'Burn in Hell',
        image:'_Phillip.jpg',
        excerpt:'If I were reincarnated, I would wish to be returned to Earth as a killer virus to lower human population levels.', 
        date: '04-09-2021'
    }
]

function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS}/>
}

export default AllPostsPage