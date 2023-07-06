// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

type Data = {
  message?: OpenAI.Chat.ChatCompletion.Choice.Message
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }],
  })
  const message = chatCompletion.choices[0].message
  console.log(message)
  res.status(200).json({ message })
}
