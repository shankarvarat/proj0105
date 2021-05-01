import React from 'react'
const User = (props) => {
    const { data } = props
    return (
        <div>
            <h1>User component</h1>
            <h2>Name : {data.name}</h2>
            <h2>Age : {data.age}</h2>

        </div>
    )
}

export default User;