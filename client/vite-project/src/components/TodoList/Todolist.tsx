import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import {ListItem} from "../Listitem/Listitem";
import "./todolist.css"

interface Task {
    _id: string;
    task: string;
}




export const Todolist: React.FC = () => {
    const [data, setData] = useState<Task[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [newtask, setNewTask] = useState<String | null>(null);



    const postDataToBackend = async (newTask: String | null): Promise<void> => {
        try {
            console.log("yes")
            if (newTask === null) {
                throw new Error('New task is null');
            }
    
            const response: AxiosResponse = await axios.post('http://localhost:8080/add', { task: newTask });
            console.log('Data posted successfully:', response.data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };
    

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/display');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error:any) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 1000);
        return () => clearInterval(intervalId);
    }, []);




    return (
        <div className='main-container'>
            <h1>Todo List</h1>
            {error && <div>Error: {error.message}</div>}
            <ul className="ul-list">
                {data !== null && data.map((work: Task) => (
                    <ListItem id={work._id} content={work.task} />
                    ))}
            </ul>
                    <input type="text" placeholder='Add todo item' onChange={(e)=>setNewTask(e.currentTarget.value) }/>
                    <button onClick={() => postDataToBackend(newtask)}>Add</button>


        </div>
    );
};





