import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

async function main() {
  // Create enum (ignore if exists)
  try {
    await sql`CREATE TYPE inquiry_status AS ENUM ('new','contacted','qualified','quoted','converted','closed')`;
  } catch (e: any) {
    if (!e.message?.includes("already exists")) console.error("Enum error:", e.message);
    else console.log("Enum inquiry_status already exists");
  }

  // Create table
  await sql`
    CREATE TABLE IF NOT EXISTS inquiries (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      session_id varchar(100),
      name varchar(200),
      email varchar(320),
      phone varchar(50),
      company varchar(200),
      country varchar(100),
      source_page varchar(500),
      interests text,
      message text,
      conversation_summary text,
      status inquiry_status NOT NULL DEFAULT 'new',
      priority varchar(20) DEFAULT 'medium',
      assigned_to varchar(200),
      admin_notes text,
      metadata jsonb,
      contacted_at timestamp,
      created_at timestamp NOT NULL DEFAULT now(),
      updated_at timestamp NOT NULL DEFAULT now()
    )
  `;

  // Create indexes
  await sql`CREATE INDEX IF NOT EXISTS inquiries_status_idx ON inquiries(status)`;
  await sql`CREATE INDEX IF NOT EXISTS inquiries_email_idx ON inquiries(email)`;
  await sql`CREATE INDEX IF NOT EXISTS inquiries_created_idx ON inquiries(created_at)`;

  console.log("OK: inquiries table created successfully");
}

main().catch(console.error);
