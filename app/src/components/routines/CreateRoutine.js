//import { useState, useEffect } from 'react';
//import { Redirect } from 'react-router';
//import {createRoutine} from

const MakeRoutine = ({ setDisplayMessage, setIsShown, loggedIn }) => {
// if(!loggedIn){return <Redirect to = "/" />}
    /* const [newRoutine, setNewRoutine] = useState();
    const [finished, setFinished] = useState(false); */

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Say Cheese!!!");
        
        
        /* const [name, goal] = event.target;
        
        if(name.value && goal.value){
           const newRoutine = {
               routine: {
                   name: name.value,
                   goal: goal.value
               }
           } 
           setNewRoutine(newRoutine)
        }else{
            //display message
            //set message to show(true)
        } */
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    /* useEffect(async () => {
        if(newRoutine) {
            try{
                const response = await createRoutine(newRoutine);
                setFinished(true)
    
            }catch (error) {
                console.error(error)
            }finally {<Redirect to = "/"/>}
        }
        }, [newRoutine]) */

    
    /* if(finished){
        return <Redirect to = "/"/>

    }else{ */
        return ( <div className="makePost">
                
        <h2>Create A Post</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' placeholder='Name' />
            </div>
            <div>
                <label>Goal</label>
                <input type='text' placeholder='Goal' />
            </div>
            <button className = "submitButton" type='submit'>Submit</button>
        </form>
    </div>
        )
    }
//}

export default MakeRoutine
