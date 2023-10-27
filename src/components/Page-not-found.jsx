function PageNotFound({badRoute,error}) {
    console.log(error)
    if(error){
        if(error === 'Topic not found'){
            return <p>This topic doesn't exist yet!</p>
        }else if(error === 'Article doesn\'t exist'){
            return <p>The article you are looking for cannot be found</p>
        }else if(error === 'Bad request'){
            return <p>Something went wrong please return home</p>
        }
    }
    if(badRoute){
        return <p>Sorry the page you are looking for cannot be found</p>
    }
}

export default PageNotFound