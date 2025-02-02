import { OpenAI } from "openai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are an expert web developer specializing in creating landing pages. 
Generate complete, self-contained HTML and CSS code for landing pages based on user requirements. 
Include modern design patterns, responsive layouts, and optimize for conversion. 
Use internal CSS styles and ensure the code is production-ready.
Always include viewport meta tag and proper HTML5 structure.`;

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { messages } = body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
    });

    const generatedMessage = response.choices[0].message?.content || "";
    
    const codeMatch = generatedMessage.match(/```html([\s\S]*?)```/);
    const code = codeMatch ? codeMatch[1].trim() : "";

    return NextResponse.json({
      message: generatedMessage,
      code: code,
    });
  } catch (error) {
    console.error("[CHAT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

