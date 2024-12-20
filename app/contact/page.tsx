import Header from "@/components/About/Header";
import Header2 from "@/components/About/Header2";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header>Contact</Header>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-center text-muted-foreground animate-blur-in">
          Open To Job Offers
        </h2>
        <div className="text-center animate-blur-in">
          <Header2>Web Development Projects and Collaborations</Header2>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
