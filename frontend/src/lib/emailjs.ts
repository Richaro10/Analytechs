import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export interface EmailParams {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (templateParams: Record<string, unknown>) => {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return result;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};