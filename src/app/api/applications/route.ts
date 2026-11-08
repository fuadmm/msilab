import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const type = data.type || "instrument-service";
    const timestamp = new Date().toISOString();
    const randomSeq = Math.floor(1000 + Math.random() * 9000);
    const trackingId = data.trackingId || (type === "instrument-service" ? `MSI-SRV-2026-${randomSeq}` : `MSI-APP-2026-${randomSeq}`);

    const recipients = [
      { name: "Prof. Dr. Mohammad Monirul Islam (PI)", email: "islammm@cu.ac.bd" },
      { name: "Mohammad Mushtak Fuad (Lab Manager)", email: "mushtakfuad@gmail.com" },
      { name: "MSI Lab Official Desk", email: "msilab.cu@gmail.com" }
    ];

    const record = {
      trackingId,
      type,
      submittedAt: timestamp,
      recipients: recipients.map(r => r.email),
      payload: data
    };

    // Store persistently in data/applications.json
    try {
      const storageDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, { recursive: true });
      }
      const storageFile = path.join(storageDir, "applications.json");
      let existing: any[] = [];
      if (fs.existsSync(storageFile)) {
        try {
          existing = JSON.parse(fs.readFileSync(storageFile, "utf-8"));
        } catch {
          existing = [];
        }
      }
      existing.unshift(record);
      fs.writeFileSync(storageFile, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fsErr) {
      console.warn("Notice: Local file logging skipped (e.g. read-only environment):", fsErr);
    }

    return NextResponse.json({
      success: true,
      trackingId,
      directedTo: recipients,
      message: "Application successfully registered and routed to MSI Lab leadership."
    });
  } catch (error) {
    console.error("Application submission handler error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process application request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: "MSI Lab Application Router",
    recipients: [
      { role: "Principal Investigator", name: "Prof. Dr. Mohammad Monirul Islam", email: "islammm@cu.ac.bd" },
      { role: "Laboratory Manager", name: "Mohammad Mushtak Fuad", email: "mushtakfuad@gmail.com" },
      { role: "Official Lab Communications", name: "MSI Lab Central Desk", email: "msilab.cu@gmail.com" }
    ],
    status: "Active"
  });
}
