import {Redirect, Link} from "react-router-dom"
import {useEffect, useState} from "react"
import {fetchUserRoutines, applyActivityToRoutine, updateRoutineApi, updateActivitiesApi} from "../../api"

const MyRoutines = ({loggedIn, currentUser, activities}) => {
    const [userRoutines, setUserRoutines] = useState()
    const [activityId, setActivityId] = useState();
    const[durationCount, setDurationCount] = useState();
    const [routineId, setRoutineId] = useState();
    const[hack, setHack] = useState(1);
    const [updateRoutine, setUpdateRoutine] = useState()
    const [updateActivities, setUpdateActivities] = useState()
    
    /* const[showUpdate, setShowUpdate] =  */
    const handleSubmit = async (event) => {
        event.preventDefault()
        const {duration,count} = durationCount;
        
        
        try{
        const response = await applyActivityToRoutine(routineId, activityId, count, duration)
        console.log(response)
        if(!response.id){
           return alert("Something went wrong")
            
        }
        setRoutineId(null)
        setDurationCount(null)
        setActivityId(null)
        setHack(hack+1)
        }catch(error) {console.error(error)}
        
        



    }

    const handleSubmitUpdateRoutine = async (event) => {

        event.preventDefault()

        try{
            const routines  = await updateRoutineApi(updateRoutine); //<--change to currentUser
            
            
        }catch (error) {console.error(error)
        }
        

   
    }

    const handleSubmitUpdateActivities = async (event) => {
        event.preventDefault()
        try{
            const routines  = await updateActivitiesApi(updateActivities); //<--change to currentUser
            
            
        }catch (error) {console.error(error)
        }
    }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getUserRoutines = async () => {
    
        if(!currentUser || !activities){
            return
        }
        try{
            const routines  = await fetchUserRoutines(currentUser); //<--change to currentUser
            setUserRoutines(routines)
            console.log(routines)
            console.log(activities)
            
        }catch (error) {console.error(error)
        }
    }

    useEffect(getUserRoutines, [currentUser, activities, hack])
 

    if(!loggedIn){
        return <Redirect to = "/" />
    }else{ 
        return(
            
            <div>
            <h1>Welcome {currentUser}</h1>
        
            <Link className="MakeRoutineLink" to= '/createRoutine'>Create a Routine</Link>
            {userRoutines ? userRoutines?.map((routine, index) => { // ADD ACTIVITIES
                return (
                <div key={index}>
                    <form onSubmit={
                        handleSubmitUpdateRoutine}>
                        
                    <h2><input
                                        
                        defaultValue = {routine.name}
                        onChange={(e) => setUpdateRoutine({ ...updateRoutine, name: e.target.value, routineId: routine.id })}
                        /></h2>
                        <input
                        
                        defaultValue = {routine.goal}
                        onChange={(e) => setUpdateRoutine({ ...updateRoutine, goal: e.target.value, routineId: routine.id })}
                        />
                    
                    <button className = "submitButton" type='submit'>Update Routine Goal/Name</button>
                    </form>
                    
                   
                            {routine.activities[0] ?
                                routine.activities.map((activity, index) => {
                                    return(<form onSubmit={handleSubmitUpdateActivities}>
                                        
                                    <ul key = {index}>
                                        <li><input
                                        name="Activity"
                                        required
                                        value = {activity.name}
                                        
                                        
                                        /><input
                                        name="Activity ID"
                                        required
                                        value = {activity.id}
                                        
                                        
                                        /></li>
                                        <li><input
                                        name="Description"
                                        required
                                        value = {activity.description}
                                        
                                        /></li>
                                        <li><input
                                        name="Duration"
                                        required
                                        defaultValue = {activity.duration}
                                        
                                        onChange={(e) => setUpdateActivities({ ...updateActivities, duration: e.target.value})}
                                        /></li>
                                            
                                        <li><input
                                        name="Count"
                                        required
                                        defaultValue = {activity.count}
                                        id = {activity.id}
                                        onChange={(e) => setUpdateActivities({ ...updateActivities, count: e.target.value})}
                                        /></li>
                                        
                                    </ul><button className = "submitButton" type='submit'>Update {activity.name}</button></form> 
                                    )
                                    
                                
                                }
                                
                            
                                ) :<b>No activities have been added to this routine</b>}
                                
                
                  <form onSubmit={handleSubmit}>
                      <label>Add Activity to this Routine</label>
                    <select  // do this for myRoutines. select an option that adds that activity from all activities and submit.
                            name="Activities"
                            id="select-activity"
                            value={activityId} //set to id 
                            onChange={(event) => {
                                setRoutineId(routine.id)
                                setActivityId(event.target.value)
                                return 
                                } 
                            }>
                            <option value = "null" >Select an activity to add</option>   
                            {activities.map((activity, index) => {
                                return (<option key = {index} value = {activity.id} >{activity.name}</option>
                                )}
                                )
                            }    
                            </select>
                            <div>
                                <label>Count</label>
                                <input type='number' min="1" placeholder='Count' onChange={(e) => setDurationCount({ ...durationCount, count: e.target.value })} />
                            </div>
                            <div>
                                <label>Duration</label>
                                <input type='number' min="1" placeholder='Duration' onChange={(e) => setDurationCount({ ...durationCount, duration: e.target.value })} />
                            </div>
                            <button className = "submitButton" type='submit'>Submit</button>
                    </form>
                            
                  </div>                       
                
                )
            
            
            
            
            }):<h2>Looks like you don't have any routines</h2>}
            </div>
        )
    }
}

export default MyRoutines