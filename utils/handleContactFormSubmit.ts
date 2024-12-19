import { IContactForm } from "@/interfaces/IContactForm.interface";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { isErrorWithMessage } from "./isErrorWithMessage";

export const handleContactFormSubmit = async (
  e: FormEvent<HTMLFormElement>,
  setIsSubmitting: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>,
  setSuccess: Dispatch<SetStateAction<boolean>>,
  formData: IContactForm,
  setFormData: Dispatch<SetStateAction<IContactForm>>
) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);
  setSuccess(false);

  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong!");
    }

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  } catch (err: unknown) {
    if (isErrorWithMessage(err)) {
      setError(err.message);
    } else {
      setError("An unexpected error occurred.");
    }
  } finally {
    setIsSubmitting(false);
  }
};
