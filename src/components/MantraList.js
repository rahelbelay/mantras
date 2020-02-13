import React from 'react';
export default function MantraList({
    mantras
}) {
    return (
        <ul>
            {
                mantras.map((m, i) => {

                    // console.log(m)
                    return (<li key={i}>{m}</li>)
                })

            }
        </ul>
    )

}

