import Topic from "@/app/Models/Topic";
import connectMongodb from "@/app/libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const id=params.id;
    const payload=await request.json();
    await connectMongodb();
    let result=await Topic.findByIdAndUpdate(id,payload);
    return NextResponse.json(result,{status:200});
}

export async function GET(request,{params})
{
    const id=params.id;
    const filter={_id:id}
    await connectMongodb();
    let result= await Topic.findOne(filter);
    return NextResponse.json(result,{status:200})
}