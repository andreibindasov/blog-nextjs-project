import Image from 'next/image'

import classes from './hero.module.css'

const Hero = () => {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
                src="/images/site/me.jpg" 
                alt="andrei" 
                width={300} 
                height={450} 
            />
        </div>
        <h1>Hi, I'm Andrei</h1>
        <p>
            Welcome to my blog about think tanks and their connections
        </p>
    </section>    
}

export default Hero