import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import { Mail, Linkedin } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "serviceID", // replace with your actual Service ID
        "templateID", // replace with your actual Template ID
        {
          from_name: form.name,
          to_name: "Doro Onome",
          from_email: form.email,
          to_email: "nomzykush@gmail.com",
          message: form.message,
        },
        "yourpublickey" // replace with your actual Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        {/* 🧾 Contact Info */}
        <div className="flex flex-col gap-4 mt-6 text-timberWolf">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#06AED5]" />
            <a
              href="mailto:nomzykush@gmail.com"
              className="hover:text-[#06AED5] transition-colors duration-200"
            >
              nomzykush@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3">
            <FaWhatsapp className="w-5 h-5 text-[#06AED5]" />
            <a
              href="https://wa.me/2349015618845"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#06AED5] transition-colors duration-200"
            >
              +234 901 561 8845
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-[#06AED5]" />
            <a
              href="https://www.linkedin.com/in/doro-onome"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#06AED5] transition-colors duration-200"
            >
              linkedin.com/in/doro-onome
            </a>
          </div>

          {/* X (Twitter) */}
          <div className="flex items-center gap-3">
            <FaXTwitter className="w-5 h-5 text-[#06AED5]" />
            <a
              href="https://x.com/DoroChurchill"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#06AED5] transition-colors duration-200"
            >
              @DoroChurchill
            </a>
          </div>
        </div>

        {/* ✉️ Send Message Button */}
        <a
          href="mailto:nomzykush@gmail.com?subject=Message%20from%20Portfolio&body=Hello%20Churchill,%0A%0A"
          className="live-demo flex justify-center sm:gap-4 
          gap-3 sm:text-[20px] text-[16px] text-timberWolf 
          font-bold font-beckman items-center py-5 mt-8
          whitespace-nowrap sm:w-[130px] sm:h-[50px] 
          w-[100px] h-[45px] rounded-[10px] bg-night 
          hover:bg-battleGray hover:text-eerieBlack 
          transition duration-[0.2s] ease-in-out"
          onMouseOver={() => {
            document.querySelector(".contact-btn")?.setAttribute("src", sendHover);
          }}
          onMouseOut={() => {
            document.querySelector(".contact-btn")?.setAttribute("src", send);
          }}
        >
          {loading ? "Sending..." : "Send"}
          <img
            src={send}
            alt="send"
            className="contact-btn sm:w-[26px] sm:h-[26px] 
            w-[23px] h-[23px] object-contain"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
