"use server"

export default async function test(){
    const res = await fetch('https://dummyjson.com/todos/random',
        {next:{
        tags:['todos']
        // revalidate:3
    }}
    )
    const data = await res.json();

    console.log("test called",data );

    return data
}