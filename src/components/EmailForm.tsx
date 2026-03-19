import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const WORKER_URL = "https://dodo.workers.dev";

interface EmailFormProps {
  note?: string;
  centered?: boolean;
}

const emailData = {
  email: "user@example.com",
  subject: "Newsletter signup",
  timestamp: new Date().toISOString(),
};

export default function EmailForm({
  note = "1,200+ people already waiting",
  centered = false,
}: EmailFormProps) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    });
  };

  return (
    <div
      className={`flex flex-col gap-3 w-full max-w-[360px] ${centered ? "mx-auto items-center" : ""}`}
    >
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-full px-5 py-3 text-sm font-bold text-center border border-d-mint/40 bg-d-mint-light text-emerald-800"
          >
            You're in! Dodo's on its way. 🐦
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <input
              type="email"
              className="email-input flex-1 w-full px-5 py-3 rounded-full text-[15px] font-semibold outline-none border-2 border-black/[0.08] bg-white transition-colors focus:border-d-yellow-dark font-['Nunito'] text-d-ink placeholder:text-d-ink-soft placeholder:font-normal"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state === "loading"}
              required
            />
            <motion.button
              type="submit"
              disabled={state === "loading"}
              className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-extrabold whitespace-nowrap cursor-pointer border-2 border-d-yellow-dark bg-d-yellow text-d-ink font-['Nunito'] disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: state === "loading" ? 1 : 1.03 }}
              whileTap={{ scale: state === "loading" ? 1 : 0.96 }}
            >
              {state === "loading" ? "Joining..." : "Join free"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {state === "error" && (
        <p className="text-xs font-semibold text-red-500 pl-1">
          Something went wrong — try again.
        </p>
      )}

      {state !== "error" && (
        <p className="text-xs font-semibold pl-1 text-d-ink-soft">{note}</p>
      )}
    </div>
  );
}
