"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import ButtonLoadingAnimation from "../Animations/ButtonLoadingAnimation";
import toast, { Toaster } from "react-hot-toast";
import Pfp from "../../assets/images/Hero-img.jpg";
import { motion, useAnimation, useInView } from "motion/react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
export default function ContactSection({ isLoading }) {
  const [loading, setLoading] = useState(false);
  const [fieldValues, setFieldValues] = useState({
    name: false,
    email: false,
    message: false,
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();
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
      rows: "8",
      wrap: "soft",
      stateKey: "message",
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

  useEffect(() => {
    if (!isLoading && isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls, isLoading]);

  return (
    <section id="contact" className="py-20 px-5 md:px-15 overflow-hidden">
      <Toaster />
      <div className="max-w-400 mx-auto grid md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-8 justify-between md:py-5">
          <motion.div
            ref={containerRef}
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
              },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="border border-red-500 w-fit py-1 px-3 rounded-full text-lg uppercase font-space-mono bg-black/50 mb-2">
              Get in touch
            </h3>
            <h2 className="font-space-mono text-3xl">Let's work together</h2>
          </motion.div>
          <motion.figure
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
              },
            }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image src={Pfp} alt="" className="rounded-[10px]" />
          </motion.figure>
        </div>
        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
            },
          }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative"
        >
          {inputFields.map((field, id) => (
            <div key={id} className="font-space-mono flex flex-col gap-6">
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
            className="py-4 w-full mt-8 rounded-full bg-red-500 flex justify-center items-center gap-2 text-lg md:text-2xl font-space-mono hover:bg-transparent duration-300 cursor-pointer"
          >
            Submit <LuSendHorizontal className="text-xl" />
          </button>
          {loading && <ButtonLoadingAnimation />}
        </motion.div>
      </div>
    </section>
  );
}
