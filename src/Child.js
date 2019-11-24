import React, {Fragment} from "react"
import GrandChild from "./GrandChild"

const Child = () => {
    return (
        <Fragment>
            <h1>I'm the Child component</h1>
            <GrandChild />
        </Fragment>
    )
}

export default Child