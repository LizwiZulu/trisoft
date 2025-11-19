import { GoogleGenAI, Content, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "TriBot", the intelligent AI assistant for Trisoft, a premier South African software development company.
Your goal is to help potential clients understand Trisoft's services and expertise.

Trisoft specializes in:
1. Custom Software Development: Tailored solutions for enterprise needs.
2. Mobile App Development: iOS and Android native and cross-platform apps.
3. Web Application Development: Modern, responsive, and scalable web platforms.
4. System Integration: Connecting disparate business systems for efficiency.
5. Cloud Solutions: Azure, AWS, and Google Cloud architecture and migration.

Company Vibe: Innovative, Reliable, Agile, Modern, Customer-Centric.
Tone: Professional, enthusiastic, concise, and helpful.

If a user asks about pricing, suggest they contact the sales team via the form for a custom quote as every project is unique.
Do not invent specific past projects, but speak generally about experience in finance, healthcare, and retail sectors.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const streamChatResponse = async (
  history: Content[],
  userMessage: string
): Promise<AsyncIterable<GenerateContentResponse>> => {
  const ai = getClient();
  
  // We use a chat session to maintain context
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: history
  });

  return chat.sendMessageStream({ message: userMessage });
};