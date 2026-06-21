import { test } from "@playwright/test";
import runAgent from '../Ai/agent';

test("AI playwright Agent Test",async ({page})=>{

    const task = "Open Google.com, search Playwright, click the the first link and take screenshot.";

    await runAgent(page, task);


})