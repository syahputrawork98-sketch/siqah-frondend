import { useState } from "react";
import {
  approveAdminPaymentValidation,
  rejectAdminPaymentValidation,
} from "@/features/admin/api/adminApi";

export function useAdminPaymentValidationActions() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const approve = async (paymentId) => {
    if (!paymentId) {
      return null;
    }
    setIsSubmitting(true);
    try {
      return await approveAdminPaymentValidation(paymentId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reject = async (paymentId) => {
    if (!paymentId) {
      return null;
    }
    setIsSubmitting(true);
    try {
      return await rejectAdminPaymentValidation(paymentId);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    approve,
    reject,
  };
}
