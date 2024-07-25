import React,{useState,useEffect} from 'react'

const useScrollProgress = () => {
     const [completion,setCompletion]=useState(0)
     useEffect(()=>{
        const updateScrollCompletion =()=>{
        const currentprogress = window.scrollY;
        const scrollHeight = docment.body.scrollHeight -window.innerHeight

        if(scrollHeight){
            setCompletion(Number(currentprogress / scrollHeight).toFixed(2)* 100)
        }
    }
        window.addEventListenter('scroll',updateScrollCompletion)
        return()=>window.removeEventListener('scroll',updateScrollCompletion)
     })
    return (
    <div>useScrollProgress</div>
  )
}

export default useScrollProgress