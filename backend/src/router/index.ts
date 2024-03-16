import express from 'express'
const router=express.Router();
import {todoadd, todofind,tododel } from '../controllers/api'

export default():express.Router=>{  
    router.post('/add',todoadd);
    router.get('/display',todofind);
    router.delete('/del/:id',tododel);
    return router;
};