// components/dialog-provider.tsx
import { createContext, useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle } from "lucide-react";

interface DialogState {
  open: boolean;
  type: "success" | "error" | null;
  title?: string;
  message?: string;
}

interface DialogContextValue {
  showDialog: (options: Omit<DialogState, "open">) => void;
  hideDialog: () => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DialogState>({
    open: false,
    type: null,
  });

  function showDialog(options: Omit<DialogState, "open">) {
    setState({ open: true, ...options });
  }

  function hideDialog() {
    setState((prev) => ({ ...prev, open: false }));
  }

  const isSuccess = state.type === "success";
  const Icon = isSuccess ? CheckCircle : AlertTriangle;
  const iconColor = isSuccess ? "text-(--color-blue)" : "text-red-500";

  return (
    <DialogContext.Provider value={{ showDialog, hideDialog }}>
      {children}

      <Dialog open={state.open} onOpenChange={hideDialog}>
        <DialogContent
          className="bg-(--color-white-bg) rounded-xl border shadow-xl"
        >
          <DialogHeader className="text-center space-y-2">
            <Icon className={`mx-auto h-12 w-12 ${iconColor}`} />
            <DialogTitle
              className={`text-lg font-semibold ${
                isSuccess ? "text-(--color-blue)" : "text-red-600"
              }`}
            >
              {state.title}
            </DialogTitle>
            <DialogDescription className="text-(--color-black-text)">
              {state.message}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-center pt-4">
            <Button
              className="bg-(--color-blue-button) text-(--color-white-text) hover:bg-[#4c1bba]"
              onClick={hideDialog}
            >
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("useDialog must be used within <DialogProvider>");
  return ctx;
}
