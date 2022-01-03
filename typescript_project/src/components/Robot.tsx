import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import baseURL from "../Api";
import { fetchRobot } from "../Redux/Action/getRobot";
import {robotType,robotresponseState} from '../type'
import {RootState} from '../Redux/combinereducer'

const Robot = () => {
     const dispatch = useDispatch();
     const robot   = useSelector((state : RootState) =>  state.robotdata);
     console.log(robot);
    useEffect(()=>{
    dispatch(fetchRobot(baseURL));
    },[])
    return (
        <>
        <div>hello</div>
        {/* {
            robots.map((item : robottype,index : number)=>{
                console.log(item);
            })
        } */}
        </>
    )
}

export default Robot
