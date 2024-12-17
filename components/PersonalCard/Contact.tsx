import { contacts } from "@/data/contacts.data";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <div className="bg-input rounded-3xl mt-10 px-6 py-6 w-5/6 flex flex-col gap-6">
      {contacts.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          label={item.label}
          contact={item.contact}
        />
      ))}
    </div>
  );
};
export default Contact;
