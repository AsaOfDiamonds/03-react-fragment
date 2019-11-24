import React from "react"
import Child from "./Child"

const App = () => {
    return (
        <React.Fragment>
            <Child />
        </React.Fragment>
    )
}

export default App

// check all 3 files to see ways to use Fragment

// What inspecting looks like prior to using Fragments
// <!-- <div id="root">
//     <div>
//         <div>
//             <h1>I'm the Child component</h1>
//             <div>
//                 <hr>
//                 <h3>I'm the Grandchild component</h3>
//                 <p>I'm also a part of the Grandchild component</p>
//             </div>
//         </div>
//     </div>
// </div> -->


// after using Fragment
{/* <div id="root">
    <h1>I'm the Child component</h1>
    <hr>
    <h3>I'm the Grandchild component</h3>
    <p>I'm also a part of the Grandchild component</p>
</div> */}


// Pay attention to how fragments also change parent/child relationships