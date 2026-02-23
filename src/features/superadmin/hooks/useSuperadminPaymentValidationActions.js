import { useState } from "react";
import {
  approveSuperadminPaymentValidation,
  rejectSuperadminPaymentValidation,
} from "@/features/superadmin/api/superadminApi";

export function useSuperadminPaymentValidationActions() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const approve = async (paymentId) => {
    if (!paymentId) {
      return null;
    }
    setIsSubmitting(true);
    try {
      return await approveSuperadminPaymentValidation(paymentId);
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
      return await rejectSuperadminPaymentValidation(paymentId);
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
