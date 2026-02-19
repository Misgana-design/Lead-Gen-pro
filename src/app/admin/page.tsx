"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LeadRequest } from "@/app/api/leads/route";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<LeadRequest[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);

  // For this project, the password is "leadgen2026"
  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "leadgen2026") {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert("Incorrect Password");
    }
  };

  const fetchLeads = async () => {
    setIsLoading(true);
    const res = await fetch("/api/leads");
    const data = await res.json();
    setLeads(data);
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setLeads([]);
  };

  const updateStatus = async (id: number | undefined, status: string) => {
    try {
      const res = await fetch("api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (res.ok) {
        setLeads((prev) =>
          prev?.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
        );
      }

      if (!res.ok) throw new Error();
    } catch (error) {
      alert("Updating status failed");
    }
  };

  const deleteLeads = async (id: number | undefined) => {
    try {
      const res = await fetch(`api/leads?id=${id}`, { method: "DELETE" });
      if (!confirm("Are you sure you want to delete")) return;
      if (res.ok) {
        setLeads(leads?.filter((lead) => lead.id !== id));
      }
      if (!res.ok) throw new Error();
    } catch (error) {
      alert("Delete failed");
    }
  };

  if (!isAuthenticated) {
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

  return (
    <div className="animate-fade-in">
      <Section>
        {isLoading && "Loading"}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Inbound Leads</h1>
          <Button variant="secondary" onClick={fetchLeads}>
            Refresh Data
          </Button>
          <Button
            onClick={handleLogout}
            className="bg-red-100 text-red-600 border border-red-100 hover:bg-red-100 hover:text-red-700 hover:cursor-pointer p-3"
          >
            Logout
          </Button>
        </div>

        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Email</th>
                <th className="p-4 font-semibold">Message</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Buttons</th>

                {leads?.map(
                  (lead) =>
                    lead.status === "New" && (
                      <th className="p-4 font-semibold"></th>
                    ),
                )}
              </tr>
            </thead>
            <tbody>
              {leads?.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-slate-500">
                    No leads captured yet.
                  </td>
                </tr>
              ) : (
                leads?.map((lead) => (
                  <tr
                    key={lead?.id}
                    className="border-b hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 text-sm">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4 font-medium">{lead.name}</td>
                    <td className="p-4 text-sm">{lead.email}</td>
                    <td className="p-4 text-sm text-slate-600 truncate max-w-xs">
                      {lead.message}
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs font-bold bg-green-100 text-green-700 rounded-full">
                        {lead.status}
                      </span>
                    </td>
                    <td>
                      <Button
                        onClick={() => deleteLeads(lead.id)}
                        variant="secondary"
                      >
                        Delete
                      </Button>
                    </td>
                    {lead.status === "New" && (
                      <td>
                        <button
                          onClick={() => updateStatus(lead.id, "Contacted")}
                          className="hover:cursor-pointer"
                        >
                          Mark as contacted
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
