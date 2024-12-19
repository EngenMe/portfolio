"use client";

import { useState, FC } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { IContactForm } from "@/interfaces/IContactForm.interface";
import { handleContactFormChange } from "@/utils/handleContactFormChange";
import { handleContactFormSubmit } from "@/utils/handleContactFormSubmit";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <form
      onSubmit={(e) =>
        handleContactFormSubmit(
          e,
          setIsSubmitting,
          setError,
          setSuccess,
          formData,
          setFormData
        )
      }
      className="max-w-md mx-auto p-4 bg-input shadow-md rounded-md"
    >
      {/* Name */}
      <div className="mb-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleContactFormChange(e, setFormData)}
          required
          placeholder="Your Name"
          className="mt-2 shadow-md"
        />
      </div>
      {/* Email */}
      <div className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleContactFormChange(e, setFormData)}
          required
          placeholder="you@example.com"
          className="mt-2 shadow-md"
        />
      </div>
      {/* Message */}
      <div className="mb-4">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleContactFormChange(e, setFormData)}
          required
          placeholder="Your message..."
          className="mt-2 shadow-md"
          rows={5}
        />
      </div>
      {/* Success or Failed Message */}
      {error && <p className="text-destructive mb-4">{error}</p>}
      {success && (
        <p className="text-green-500 mb-4">Message sent successfully!</p>
      )}
      {/* Submit Button */}
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
