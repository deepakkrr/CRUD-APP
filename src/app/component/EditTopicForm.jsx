"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditTopicForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  console.log(params.id);
  const router=useRouter();

  useEffect(() => {
    fetch(`http://localhost:3000/api/Topics/${params.id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.title) {
          setTitle(result.title);
        }
        if (result.description) {
          setDescription(result.description);
        }
      });
  }, []);

  const handleUpdate= async (e)=>{
      e.preventDefault();
    let result=await fetch(`http://localhost:3000/api/Topics/${params.id}`,{
      method:"put",
      body:JSON.stringify({title,description}),
      headers:{
        "Content-type":"application/json"
      }
    });
    result=await result.json();
    if(result){
      alert("Topic has Been Updaed");
      router.push("/");
    }
  }
  return (
    <div className="flex flex-col gap-3">
      <form action="">
        <input
          style={{ width: "737px" }}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-800 px-8 py-2"
          type="text"
          placeholder="Topic Tittle"
        />
        <br />
        <br />
        <input
          style={{ width: "737px" }}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-800 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />
        <br />
        <br />
        <button
          style={{ color: "white" }}
          className="bg-green-600 font-bold py-3 px-6 w-fit"
          onClick={handleUpdate}
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
