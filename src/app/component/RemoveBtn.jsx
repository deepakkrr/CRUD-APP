"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
const RemoveBtn = (props) => {
  // console.log(props.id);
 const router=useRouter();

   const handleDel=async ()=>{
    const confirmed=confirm("Do You Want To Delete The Selected Topic");
    if(confirmed){
    let result= await fetch(`http://localhost:3000/api/Topics/?id=${props.id}`,{
      method:"delete",
    });
    result=await result.json();
    if(result){
      alert("Topic has been deleted Succefully");
      router.refresh();
    }
  }
   }
  return (
    <>
      <button className="text-red-400">
        <HiOutlineTrash onClick={handleDel} size={24}/>
      </button>
    </>
  );
};

export default RemoveBtn;
