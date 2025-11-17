import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BulkEnquirySchema } from "../schema/bulkEnquiryForm.schema";
import { submitBulkEnquiry } from "../services/bulkEnquiry.service";
import type { BulkEnquiryType } from "../schema/bulkEnquiryForm.schema";
import { useMutation } from "@tanstack/react-query";
import { useDialog } from "@/providers";

export function useBulkEnquiryForm() {

  const dialog = useDialog();

  const form = useForm<BulkEnquiryType>({
    resolver: zodResolver(BulkEnquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: submitBulkEnquiry,
    onError: (error) => {
      console.log(error);
      dialog.showDialog({
        title: "Error",
        message: "Bulk enquiry submission failed",
        type: "error",
      });
    },
    onSuccess: () => {
      form.reset();
      dialog.showDialog({
        title: "Success",
        message: "Enquiry created successfully. We will get back to you soon.",
        type: "success",
      });
    },
  });

  const onSubmit = async (data: BulkEnquiryType) => {
    mutation.mutate(data);
  };

  return { form, onSubmit, mutation };
}
