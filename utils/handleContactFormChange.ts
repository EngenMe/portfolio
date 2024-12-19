import { IContactForm } from "@/interfaces/IContactForm.interface";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleContactFormChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFormData: Dispatch<SetStateAction<IContactForm>>
) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
