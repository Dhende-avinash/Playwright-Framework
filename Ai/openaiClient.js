import OpenAI from "openai";
import promptTemplate from "./promptTemplate";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    
    
});

async function generatePlaywrightCode(task) {

    const prompt = promptTemplate(task);

    const response = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });

    const generatedCode =
        response.choices[0].message.content
            ?.replace(/```javascript/g, "")
            ?.replace(/```js/g, "")
            ?.replace(/```/g, "")
            ?.trim();

    return generatedCode || "";
}

export default generatePlaywrightCode;