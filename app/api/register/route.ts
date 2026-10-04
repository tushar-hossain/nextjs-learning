import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and password are required",
        },
        { status: 400 },
      );
    }

    const usersCollection = dbConnect("users");
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 },
      );
    }

    const registerData = {
      name,
      email,
      password,
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(registerData);

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
