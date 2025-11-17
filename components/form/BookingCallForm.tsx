/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { CalendarIcon, ClockIcon, MailIcon, UserIcon } from "lucide-react";

type FormValues = {
  name?: string;
  email: string;
  date: string;
  time: string;
};

// Reusable form input component
const FormInput = ({ icon: Icon, id, ...props }: any) => (
  <div className="relative">
    <label htmlFor={id} className="sr-only">{props.placeholder}</label>
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    <input
      id={id}
      {...props}
      className={`
        pl-12 pr-4 py-3 w-full 
        bg-[#0f1115]/70 border border-[#1c1f26] 
        rounded-xl text-gray-200 text-base
        shadow-inner shadow-black/20
        focus:outline-none focus:ring-2 focus:ring-[#02FF95]/60 
        transition-all duration-300
        ${props.className}
      `}
    />
  </div>
);

export default function BookingCallForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await fetch("/api/book-a-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Your call has been booked successfully! Check your email.");
        reset();
      } else {
        toast.error(result.message || "Failed to book your call.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-[#0c1015] relative">
      
      {/* Background Grid + Gradient Glow */}
      <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02FF95]/5 to-transparent"></div>

      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-lg p-8 md:p-10 rounded-2xl  
        bg-[#111418]/80 backdrop-blur-xl shadow-2xl border border-white/10"
      >
        <header>
          <h2 className="text-3xl font-bold text-white mb-2">
            Book a Discovery Call
          </h2>
          <p className="text-gray-400 mb-8">
            Choose a preferred date & time and we’ll discuss your project details.
          </p>
        </header>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          
          <div>
            <FormInput
              id="name"
              type="text"
              placeholder="Your Name (Optional)"
              icon={UserIcon}
              {...register("name")}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <FormInput
              id="email"
              type="email"
              placeholder="Your Work Email"
              icon={MailIcon}
              className={errors.email ? "border-red-500 ring-1 ring-red-500" : ""}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
              disabled={isSubmitting}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2" role="alert">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <FormInput
                id="date"
                type="date"
                icon={CalendarIcon}
                className={errors.date ? "border-red-500 ring-1 ring-red-500" : ""}
                {...register("date", { required: "Date is required" })}
                disabled={isSubmitting}
                aria-invalid={errors.date ? "true" : "false"}
              />
              {errors.date && (
                <p className="text-red-400 text-sm mt-2" role="alert">{errors.date.message}</p>
              )}
            </div>

            <div>
              <FormInput
                id="time"
                type="time"
                icon={ClockIcon}
                className={errors.time ? "border-red-500 ring-1 ring-red-500" : ""}
                {...register("time", { required: "Time is required" })}
                disabled={isSubmitting}
                aria-invalid={errors.time ? "true" : "false"}
              />
              {errors.time && (
                <p className="text-red-400 text-sm mt-2" role="alert">{errors.time.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-4 py-3 rounded-xl font-semibold text-lg
              bg-[#02FF95] text-black
              hover:bg-[#00e683] transition-all 
              shadow-lg shadow-[#02FF95]/40 hover:shadow-xl
              disabled:opacity-50 disabled:cursor-not-allowed
              active:scale-95
            "
          >
              {isSubmitting ? "Booking..." : "Book a Call"}
          </button>
        </form>
      </div>
    </section>
  );
}
