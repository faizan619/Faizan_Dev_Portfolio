import { connectionStr } from "../lib/db";
import { Feedback } from "../lib/model/feedback";
import mongoose from "mongoose"
import { NextResponse } from "next/server";

export async function GET(){

    let data = []
    let success = true
    try{
        await mongoose.connect(connectionStr)
        data = await Feedback.find()
    }
    catch(error){
        data = {result:"error"}
        success = false
    }

    return NextResponse.json({result:data,success})
}


export async function POST(req){
    const payload = await req.json();
    await mongoose.connect(connectionStr)
    let feedback = new Feedback(payload)
    const result = await feedback.save();
    return NextResponse.json({result,success:true})
}