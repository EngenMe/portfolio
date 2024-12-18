import { Contact } from "@/interfaces/Contact.interface";

const ContactItem = ({ icon: Icon, label, contact }: Contact) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <div className="bg-background w-10 h-10 rounded-md flex justify-center items-center shadow-lg">
          <Icon className="text-muted-foreground" />
        </div>
        <div className="flex flex-col items-start">
          <div className="text-muted-foreground text-sm">{label}</div>
          <div className="font-medium">
            {contact.includes("@") ? (
              <div>
                <div className="md:hidden lg:flex">
                  {contact.split("@")[0]}
                  <br />@{contact.split("@")[1]}
                </div>
                <div className="hidden md:flex lg:hidden">{contact}</div>
              </div>
            ) : (
              contact
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default ContactItem;
