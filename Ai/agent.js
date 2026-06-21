import { error } from "console";
import fs from "fs";
import generatePlaywrightCode from "./openaiClient";


async function runAgent(page, task) {

     // Create Screenshots folder if it doesn't exist
    if (!fs.existsSync("Screenshots")) {
        fs.mkdirSync("Screenshots");
    }
    
    const code = await generatePlaywrightCode(task);

    console.log("====Generated Playwright Code====");
    console.log(code);
    console.log("=================================");

   
     try{
    const asyncFunction = new Function(
        "page",
        `
  return (async () => {
      ${code}
  })();
`
    );

    await asyncFunction(page);
    }
    catch(error){
        console.error("Generated code failed:");
        console.error(error.message);
        console.error(error.stack);
    }
}
export default runAgent;