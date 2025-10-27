import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { Mail } from 'lucide-react'; // optional icon library (if available)


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'serviceID',
        'templateID',
        {
          from_name: form.name,
          to_name: 'Doro Onome',
          from_email: form.email,
          to_email: 'nomzykush@gmail.com',
          message: form.message,
        },
        'yourpublickey'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        {/* ✅ Email Display Section */}
        <div className="flex items-center gap-3 mt-6 mb-8 text-timberWolf">
          <Mail className="w-5 h-5" />
          <a
            href="mailto:nomzykush@gmail.com"
            className="text-[16px] sm:text-[18px] font-medium hover:text-battleGray transition"
          >
            nomzykush@gmail.com
          </a>
        </div>

        {/* ✅ Email Send Button */}
        <a
          href="mailto:nomzykush@gmail.com?subject=Message%20from%20Portfolio&body=Hello%20Onome,%0A%0A"
          className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] 
          text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap 
          sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night 
          hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
          onMouseOver={() => {
            document.querySelector('.contact-btn').setAttribute('src', sendHover);
          }}
          onMouseOut={() => {
            document.querySelector('.contact-btn').setAttribute('src', send);
          }}
        >
          {loading ? 'Sending' : 'Send'}
          <img
            src={send}
            alt="send"
            className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
          />
        </a>
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Contact, 'contact');
