"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      document.cookie = `admin_token=${password}; path=/; max-age=86400`;
      router.push("/admin");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="animate-fade-in">
      <Section className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="max-w-md w-full p-8 border rounded-xl bg-white shadow-lg"
        >
          <h1 className="text-2xl font-bold mb-6">Admin Access</h1>
          <input
            type="password"
            required
            placeholder="Enter Admin Password"
            className="w-full p-3 border rounded mb-4 outline-none focus:ring-2 focus:ring-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full hover:cursor-pointer">Login</Button>
        </form>
      </Section>
    </div>
  );
}
