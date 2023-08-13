"use client";
import React, { useState } from "react";
import styles from "./page.module.css"
import { useRouter } from "next/navigation";
const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [error, setError] = useState(false);
 const router=useRouter();
  const handleAdd = async (e) => {
    e.preventDefault();
    // console.log(title,desc);
    if (!title || !description) {
      setError(true);
    } else {
      let result = await fetch("http://localhost:3000/api/Topics", {
        method: "post",
        body:JSON.stringify({ title, description }),
        headers: {
          "Content-type": "application/json",
        },
      });
      result =  await result.json();
      console.log(result);
      if (result) {
        alert("Topic Added Succesfully");
        router.push("/");
      }
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <form action="">
        <input
          style={{ width: "737px" }}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-slate-800 px-8 py-2"
          type="text"
          placeholder="Topic Tittle"
        />
        {error && !title ? <span className={styles.Errormess}>Please Enter Title</span>:""}
        <br />
        <br />
        <input
          style={{ width: "737px" }}
          onChange={(e) => setDesc(e.target.value)}
          className="border border-slate-800 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />
        {error && !description ? <span className={styles.Errormess}>Please Enter Description</span>:""}
        <br />
        <br />
        <button
          style={{ color: "white" }}
          onClick={handleAdd}
          className="bg-green-600 font-bold py-3 px-6 w-fit"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default page;
