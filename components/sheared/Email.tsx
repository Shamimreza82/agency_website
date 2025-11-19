"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function Email() {
  const params = useSearchParams();
  const verified = params.get("verified");

  useEffect(() => {
    if (verified === "success") {
      toast.success("Email verified successfully!");
    }
    if (verified === "expired") {
      toast.error("Verification link expired!");
    }
    if (verified === "invalid") {
      toast.error("Invalid verification link!");
    }
  }, [verified]);

  return toast.success("Email verified successfully!");
}
