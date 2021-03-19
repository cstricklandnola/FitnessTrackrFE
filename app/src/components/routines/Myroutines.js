import {Redirect} from "react-router-dom"
import {useEffect, useState} from "react"
import {fetchUserRoutines} from "../../api"
const MyRoutines = ({loggedIn, currentUser}) => {
    const [userRoutines, setUserRoutines] = useState()
    const getUserRoutines = async () => {
        try{
            const routines = await fetchUserRoutines("albert"); //<--change to currentUser
            console.log(routines)
            setUserRoutines(routines)
        }catch (error) {console.error(error)
        }
    }

    useEffect( getUserRoutines, []);
    

    if(!loggedIn){
        return <Redirect to = "/" />
    }else{
        return(
            <div>
            <h1>Welcome {currentUser}</h1>
            {userRoutines?.map((routine, index) => { // ADD ACTIVITIES
                return (
                   <div key={index}>
                        <h2>{routine.name}</h2>
                        <p>{routine.goal}</p>  
                   </div> 
                )
            
            
            
            
            })}
            </div>
        )
    }
}

export default MyRoutines