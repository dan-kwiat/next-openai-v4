import type { NextRequest } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const config = {
  runtime: "edge",
}

export default async function handler(req: NextRequest) {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }],
  })
  const message = chatCompletion.choices[0].message
  console.log(message)

  return new Response(JSON.stringify({ message }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  })
}
