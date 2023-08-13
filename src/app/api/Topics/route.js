import Topic from "@/app/Models/Topic";
import connectMongodb from "@/app/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request){
    const payload= await request.json();
    await connectMongodb();
    const data=new Topic(payload);
    const result= await data.save();
    return NextResponse.json(result)
}

export async function GET() {
    await connectMongodb();
    let result=await Topic.find();
    console.log(result);
    return NextResponse.json(result);
}
export async function DELETE(request) {
    const id=request.nextUrl.searchParams.get("id")
    await connectMongodb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic Deleted"},{status:200});
}