import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Contact us for any queries or feedback. We will be more than happy to help you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
