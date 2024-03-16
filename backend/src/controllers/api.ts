import express from 'express'

import { Todomodel } from '../db/task';




export const todoadd=async (req:express.Request,res:express.Response)=>{
    try {
        // console.log("hi");
        const {task}=req.body;

        if(!task || typeof task !== 'string'){
            return res.sendStatus(400);
        }

       

        
        Todomodel.create({
            task:task
        }).then(result=>res.json(result))

    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
}



export const todofind=async (req:express.Request,res:express.Response)=>{
    try {
        
        Todomodel.find().then(result=>res.json(result)).catch(err=>res.json(err))

        

    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
}


export const tododel=async (req:express.Request,res:express.Response)=>{
    try {
        const {id}=req.params;

        if(!id || typeof id !== 'string'){
            return res.sendStatus(400);
        }

        await Todomodel.deleteOne({_id:id})
        return res.sendStatus(200)

       

    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
}


// export const todoupdate=async (req:express.Request,res:express.Response)=>{
//     try {
//         // console.log("hi");
//         const {id,task}=req.body;

//         if(!id || typeof id !== 'string' || !task || typeof task!=='string'){
//             return res.sendStatus(400);
//         }

//         await Todomodel.findByIdAndUpdate(id,{task:task},{new:true})
//         return res.sendStatus(200)

       

//     } catch (error) {
//         console.log(error)
//         return res.sendStatus(400);
//     }
// }
