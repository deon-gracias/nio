import {motion} from "framer-motion"
import { createElement, useState } from "react"
export default function Box(props) {
    return (
    <>
    <motion.div
            animate={{ y: -props.tester}}
            transition={{ type: "linear", duration: 10}} >
    {Listofimg(props.url)}
    </motion.div>
    </>
    )
}

function Listofimg(ele) {
    return (ele.map((url,index) => (
        createImage(url,index)
    )))

}

function createImage(url, index) {
    return <img src={url} key={index} alt="missing" ></img>
}
