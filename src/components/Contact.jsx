// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { databases, ID } from "../appwrite/appwrite";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
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
      alert("Message sent successfully! ✅");
      reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Something went wrong. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white py-20 px-6 relative overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-sky-400 mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 max-w-xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Got a project or just want to say hello? I'm always open to discussing
        new ideas or opportunities to be part of your visions.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-6 bg-gray-800 p-8 rounded-2xl shadow-xl border border-sky-500/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-bold tracking-wide text-lg transition flex justify-center items-center"
          whileHover={{ scale: !loading ? 1.05 : 1 }}
          whileTap={{ scale: !loading ? 0.95 : 1 }}
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {isSubmitSuccessful && !loading && (
          <p className="text-green-400 text-center pt-4">
            Message sent successfully!
          </p>
        )}
      </motion.form>

      {/* Animated Background Circles */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 2 }}
      />
      <motion.div className="absolute w-40 h-40 bg-sky-500 opacity-20 blur-2xl rounded-full bottom-10 right-10 animate-ping" />
    </section>
  );
}
