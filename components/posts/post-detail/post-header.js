import Image from 'next/image'

import classes from './post-header.module.css'

const PostHeader = (props) => {
    const { title, image } = props

    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image 
                className={classes.img}
                src={image}
                alt={title}
                width={450}
                height={300}
            />
        </header>
    )
}

export default PostHeader