import React from "react"
import GrandChild from "./GrandChild"

function Child() {
    return (
        <div>
            <h1>I'm the Child component</h1>
            <GrandChild />
        </div>
    )
}

export default Child