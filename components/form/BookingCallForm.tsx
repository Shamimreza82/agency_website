/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { CalendarIcon, ClockIcon, MailIcon, UserIcon } from 'lucide-react';

type FormValues = {
  name?: string;
  email: string;
  date: string;
  time: string;
};

// Custom input component for better styling and icon integration
const FormInput = ({ icon: Icon, ...props }: any) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
    <input
      {...props}
      className={`
        pl-12 pr-5 py-3 
        bg-white border text-gray-900 text-base 
        rounded-xl block w-full 
        focus:outline-none focus:ring-2 focus:ring-[#02FF95] 
        transition-colors appearance-none 
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

    console.log("Form Data Submitted:", data);
    try {
      // Simulate API call to "/api/subscribe"
      const res = await fetch("/api/book-a-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Your call has been booked successfully! Check your email for confirmation.");
        reset();
      } else {
        // Use a more specific error message if available
        toast.error(result.message || "Failed to book your call. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 w-full max-w-lg">
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Book a Discovery Call 📞</h2>
        <p className="text-gray-600 mb-8">
          Select your preferred date and time to discuss your project.
        </p>

        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

          {/* Optional Name Field */}
          <div>
            <label htmlFor="name" className="sr-only">Your Name (Optional)</label>
            <FormInput
              id="name"
              type="text"
              placeholder="Your Name (Optional)"
              icon={UserIcon}
              {...register("name")}
              disabled={isSubmitting}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">Your Work Email</label>
            <FormInput
              id="email"
              type="email"
              placeholder="Your Work Email"
              icon={MailIcon}
              className={errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-2 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Date and Time Group */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Date Field */}
            <div>
              <label htmlFor="date" className="sr-only">Select Date</label>
              <FormInput
                id="date"
                type="date"
                icon={CalendarIcon}
                // Override default styling for date/time placeholders/text
                className={`
                  ${errors.date ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"}
                  // For better UX, style input text color when empty/filled
                  text-gray-400 focus:text-gray-900 
                  ${
                    // Custom class to make placeholder/text visible (optional, depends on browser)
                    // The placeholder will disappear when a value is selected.
                    // A better solution would be to wrap input in a custom div.
                    // For now, let's keep it simple with text color
                    'date-input'
                  }
                `}
                {...register("date", { required: "Date is required" })}
                disabled={isSubmitting}
              />
              {errors.date && <p className="text-red-500 text-sm mt-2 font-medium">{errors.date.message}</p>}
            </div>
            
            {/* Time Field */}
            <div>
              <label htmlFor="time" className="sr-only">Select Time</label>
              <FormInput
                id="time"
                type="time"
                icon={ClockIcon}
                className={errors.time ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"}
                {...register("time", { required: "Time is required" })}
                disabled={isSubmitting}
              />
              {errors.time && <p className="text-red-500 text-sm mt-2 font-medium">{errors.time.message}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              bg-[#02FF95] text-gray-900 font-semibold text-lg 
              px-6 py-3 rounded-xl 
              hover:bg-[#00d383] 
              transition-all duration-300 ease-in-out 
              shadow-lg shadow-[#02FF95]/30 hover:shadow-xl hover:shadow-[#00d383]/40
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking Your Call..." : "Book a Call Now"}
          </button>
        </form>
      </div>
    </div>
  );
}