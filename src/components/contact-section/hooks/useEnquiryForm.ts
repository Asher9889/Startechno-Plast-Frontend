import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, type TEnquiry } from "../schema/enquiry.schema";
import { submitEnquiry } from "../services/enquiry.service";
import { useMutation } from "@tanstack/react-query";
import { useDialog } from "@/providers";


export function useEnquiryForm() {
  const dialog = useDialog();
  
  const form = useForm<TEnquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      // company: "",
      // email: "",
      phone: "",
      message: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: submitEnquiry,
    onError: (error:any) => {
      console.log(error);
      dialog.showDialog({
        title: "Error",
        message: error.response?.data?.message || error.message,
        type: "error",
      });    },
    onSuccess: (success) => {
      console.log(success);
      form.reset();
      dialog.showDialog({
        title: "Success",
        message: success.message,
        type: "success",
      });
    },
  })

  const onSubmit = async (data: TEnquiry) => {
    mutation.mutate(data);
  };

  return { form, onSubmit, mutation };
}
