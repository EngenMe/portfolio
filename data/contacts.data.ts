import { Contact } from "@/interfaces/Contact.interface";
import { Mail, MapPin, Phone } from "lucide-react";

export const contacts: Contact[] = [
  { icon: Phone, label: "Phone", contact: "+353 89 948 5281" },
  { icon: Mail, label: "Email", contact: "mohamdfarouk727@gmail.com" },
  {
    icon: MapPin,
    label: "Address",
    contact: "Dublin, Ireland",
  },
];
