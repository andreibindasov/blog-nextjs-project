import classes from './logo.module.css'

function Logo(){
    return(
        <div className={classes.logo}>
            BlogApp
        </div>
        
        // <div className={classes.view}>
        //     <ul className={classes.circles}>
        //         <li className={classes.h1 + ' ' + classes.item}></li>
        //         <li className={classes.h2 + ' ' + classes.item}></li>
        //         <li className={classes.h3 + ' ' + classes.item}></li>
        //         {/* <li className={classes.h4 + ' ' + classes.item}></li>
        //         <li className={classes.h5 + ' ' + classes.item}></li>
        //         <li className={classes.h6 + ' ' + classes.item}></li>
        //         <li className={classes.h7 + ' ' + classes.item}></li> */}
        //     </ul>
        // </div>
    )
}

export default Logo