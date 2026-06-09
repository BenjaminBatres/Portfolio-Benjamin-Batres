"use client";
import React, { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import ButtonLoadingAnimation from "../Animations/ButtonLoadingAnimation";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import RevealParaText from "../ui/RevalParaText";
export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [fieldValues, setFieldValues] = useState({
    name: false,
    email: false,
    message: false,
  });
  const inputFields = [
    {
      label: "Name",
      type: "text",
      id: "name",
      placeholder: "Enter name",
      stateKey: "name",
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      placeholder: "hello@mail.com",
      stateKey: "email",
    },
    {
      label: "Message",
      type: "textarea",
      id: "message",
      placeholder: "Your message",
      rows: "5",
      wrap: "soft",
      stateKey: "message",
    },
  ];

  const socials = [
    {
      path: "https://github.com/benjaminbatres",
      icon: <FaGithub className="text-2xl text-secondary" />,
    },
    {
      path: "https://linkedin.com/in/benjaminbatres",
      icon: <FaLinkedin className="text-2xl text-secondary" />,
    },
  ];

  const handleInputChange = (stateKey, value) => {
    setFieldValues({
      ...fieldValues,
      [stateKey]: value,
    });
  };

  const sendEmail = async () => {
    setLoading(true);
    const requiredFields = ["name", "email", "message"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const missingFields = requiredFields.filter((field) => !fieldValues[field]);
    if (missingFields.length > 0) {
      setLoading(false);
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.9,
          }}
          className="
        bg-zinc-900 text-white
        px-5 py-4 rounded-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        border border-white/10
        flex items-center gap-4
      "
        >
          <div className="h-3 w-3 rounded-full bg-red-500" />

          <p className="text-secondary">Please fill in all requiered fields</p>
        </motion.div>
      ));

      return;
    }

    if (!emailRegex.test(fieldValues.email)) {
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.9,
          }}
          className="
        bg-zinc-900 text-white
        px-5 py-4 rounded-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        border border-white/10
        flex items-center gap-4
      "
        >
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <p className="text-secondary">Please enter a valid email address.</p>
        </motion.div>
      ));
      setLoading(false);
      return;
    }
    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICEID;
      const templateid = process.env.NEXT_PUBLIC_TEMPLATEID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;
      const templateParams = {
        name: fieldValues.name,
        email: fieldValues.email,
        message: fieldValues.message,
      };
      const response = await emailjs.send(
        serviceId,
        templateid,
        templateParams,
        publicKey,
      );
      setLoading(false);
      setFieldValues("");
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.9,
          }}
          className="
        bg-zinc-900 text-white
        px-5 py-4 rounded-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        border border-white/10
        flex items-center gap-4
      "
        >
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <p className="text-secondary">Email Sent!</p>
        </motion.div>
      ));
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.9,
          }}
          className="
        bg-zinc-900 text-white
        px-5 py-4 rounded-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        border border-white/10
        flex items-center gap-4
      "
        >
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <p className="text-secondary">Something went wrong. Try again</p>
        </motion.div>
      ));
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-5 md:px-15 overflow-hidden">
      <Toaster />
      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-10">
        <div className="md:py-5">
          <div className="mb-10">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border border-red-500 w-fit py-1 px-3 rounded-full text-lg uppercase  bg-black/50 mb-3"
            >
              Get in touch
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-semibold text-5xl mb-6"
            >
              Let's work
              <span className="text-red-500 font-bold"> together</span>
            </motion.h2>
            <RevealParaText
              text={
                "Passionate about creating clean, user-focused solutions and continuously expanding my technical skills. Seeking opportunities to contribute to innovative teams, solve real-world problems, and grow as a software engineer."
              }
              className={
                "text-xl font-medium text-secondary lg:max-w-lg leading-none"
              }
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex items-center justify-center h-13 w-13 shadow-section-title-container bg-[#0d0d0d] rounded-full">
              <MdOutlineEmail className="text-3xl text-red-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-secondary">Email Me</p>
              <Link
                href="mailto:me@benjaminbatres.dev"
                className="text-xl font-medium text-secondary hover:text-red-500 duration-300"
              >
                me@benjaminbatres.dev
              </Link>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-secondary font-medium text-[17px] mb-4"
          >
            Connect with me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-5"
          >
            {socials.map((social, id) => (
              <Link
                href={social.path}
                key={id}
                target="_blank"
                className="flex items-center justify-center h-13 w-13 shadow-section-title-container bg-[#0d0d0d] rounded-full hover:scale-110 duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative "
        >
          {inputFields.map((field, id) => (
            <div key={id} className=" flex flex-col gap-4">
              <label className="text-xl">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  className="py-6 px-7 bg-[#282828] rounded-[10px] sm:text-lg"
                  name={field.id}
                  id={field.id}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  wrap={field.wrap}
                  value={fieldValues[field.stateKey] || ""}
                  onChange={(e) =>
                    handleInputChange(field.stateKey, e.target.value)
                  }
                ></textarea>
              ) : (
                <div className="mb-6">
                  <input
                    type={field.type}
                    name={field.id}
                    id={field.id}
                    placeholder={field.placeholder}
                    value={fieldValues[field.stateKey] || ""}
                    onChange={(e) =>
                      handleInputChange(field.stateKey, e.target.value)
                    }
                    className="py-6 px-7 bg-[#282828] rounded-[10px] w-full sm:text-lg"
                  />
                </div>
              )}
            </div>
          ))}
          <button
            onClick={sendEmail}
            className="py-4 w-full mt-8 rounded-full bg-red-500 flex justify-center items-center gap-2 text-lg md:text-2xl  hover:bg-transparent duration-300 cursor-pointer"
          >
            Submit <LuSendHorizontal className="text-xl" />
          </button>
          {loading && <ButtonLoadingAnimation />}
        </motion.div>
      </div>
    </section>
  );
}
