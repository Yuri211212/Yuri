import React from 'react'

export default function HeaderForm({ title, description}) {
    return (
        <div>
        <h2>{title}</h2>
        <p>{description}</p>  
        </div>
    )
}
