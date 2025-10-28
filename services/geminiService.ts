
import { GoogleGenAI } from "@google/genai";
import type { RefillFormData, QuestionFormData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const submitRefillRequest = async (data: RefillFormData): Promise<string> => {
  const prompt = `
    A patient is requesting a prescription refill from MB&T Pharmacy.
    Patient Information:
    - Full Name: ${data.fullName}
    - Date of Birth: ${data.dob}
    - Phone Number: ${data.phone}
    - Email: ${data.email}
    - Prescription Numbers:
      ${data.rxNumbers}

    Task:
    1. Acknowledge the receipt of the refill request for the prescriptions listed.
    2. Confirm that the request has been sent to the pharmacy team for processing.
    3. State that the pharmacy will contact them directly if there are any issues or when the prescription is ready for pickup.
    4. Maintain a friendly, professional, and reassuring tone.
    5. Do not add any information not requested in these instructions.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API error in submitRefillRequest:", error);
    return "We're sorry, but we encountered an issue submitting your request. Please call the pharmacy directly.";
  }
};

export const submitMedicalQuestion = async (data: QuestionFormData): Promise<string> => {
  const prompt = `
    A person has submitted a medical question for an MB&T pharmacist.
    User Information:
    - Full Name: ${data.fullName}
    - Contact Info (Phone or Email): ${data.contactInfo}
    - Question: "${data.question}"

    Task:
    1. Acknowledge receipt of their question.
    2. State clearly and prominently that this AI is not a medical professional and cannot provide medical advice. This is a critical disclaimer.
    3. Confirm that their question has been securely forwarded to a licensed pharmacist.
    4. Inform them that a pharmacist from MB&T Pharmacy will review their question and reach out to them via their provided contact information as soon as possible.
    5. Maintain a helpful, empathetic, but firm tone regarding the medical advice disclaimer.
    6. Do not attempt to answer the medical question.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API error in submitMedicalQuestion:", error);
    return "We're sorry, but we encountered an issue submitting your question. For any urgent matters, please call the pharmacy or consult a healthcare provider.";
  }
};
