import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { databases, ID } from '../../appwrite/appwrite.js';
// adjust path if needed

import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactNav() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        ID.unique(),
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      );
      console.log(data)
      alert("Message sent successfully! ✅");
      reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Something went wrong. ❌");
    }
  };
  

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-sky-400 font-orbitron">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg">
            Have a project in mind, a question, or just want to say hi? I'm
            always open to new opportunities and collaborations. Feel free to
            drop a message!
          </p>
          <div className="space-y-2 text-gray-400">
            <p>
              <strong>Email:</strong> kshakya154@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91-7973182512
            </p>
            <p>
              <strong>Address:</strong> Patiala, Punjab, India
            </p>
          </div>

          <div className="flex space-x-5 mt-6 text-2xl">
            <a
              href="mailto:kshakya154@gmail.com"
              className="text-sky-400 hover:text-white"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/kamal-kumar-82890727b/"
              target="_blank"
              className="text-sky-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/kshakya154/"
              target="_blank"
              className="text-sky-400 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/+917973182512"
              target="_blank"
              className="text-sky-400 hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/kshakya154"
              target="_blank"
              className="text-sky-400 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>

          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-block px-6 py-2 bg-sky-500 text-white font-semibold rounded-lg shadow hover:bg-sky-600 transition"
          >
            Download Resume
          </a>

          <iframe
            className="w-full h-60 rounded-xl mt-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.5549551905347!2d76.40962316526505!3d30.32406060939328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ff3e715ec5%3A0x409886dd1ba7182c!2sSanauri%20Adda%2C%20Markal%20Colony%2C%20Patiala%2C%20Punjab%20147001!5e0!3m2!1sen!2sin!4v1743941291486!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-gray-300">Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full mt-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-gray-300">Email</label>
            <input
              {...register("email", { required: true })}
              className="w-full mt-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
              placeholder="you@example.com"
              type="email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-gray-300">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full mt-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
              placeholder="Type your message here..."
              rows={5}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
