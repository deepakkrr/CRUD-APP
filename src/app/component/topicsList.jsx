import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  let result = await fetch("http://localhost:3000/api/Topics",{cache:"no-store"});
  result = result.json();
  return result;
};

const TopicsList = async () => {
  const data = await getTopics();
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{item.title}</h2>
            <div>{item.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={item._id} />
            <Link href={`/editTopic/${item._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
