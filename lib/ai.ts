import { CoreMessage } from "ai";

export const callLLM = async (
  messages: CoreMessage[],
  updateStatus?: (status: string) => void,
) => {
  let text = "";
  // TODO: call llm here

  // Replace Markdown links with <URL|text>
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  const replacedLinks = text.replace(linkRegex, "<$2|$1>");

  // Replace all instances of "**" with "*"
  const finalStr = replacedLinks.replace(/\*\*/g, "*");
  return finalStr;
};
