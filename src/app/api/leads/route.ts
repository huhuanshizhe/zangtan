import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// POST: Save a new lead/inquiry
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      sessionId,
      name,
      email,
      phone,
      company,
      country,
      sourcePage,
      interests,
      message,
      conversationSummary,
    } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO inquiries (
        session_id, name, email, phone, company, country,
        source_page, interests, message, conversation_summary
      )
      VALUES (
        ${sessionId || null},
        ${name || null},
        ${email},
        ${phone || null},
        ${company || null},
        ${country || null},
        ${sourcePage || null},
        ${interests || null},
        ${message || null},
        ${conversationSummary || null}
      )
      RETURNING id, created_at
    `;

    return NextResponse.json({
      success: true,
      id: result[0].id,
    });
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 }
    );
  }
}

// GET: Fetch inquiries (for admin, requires auth)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    let query;
    if (status && status !== "all") {
      query = sql`
        SELECT * FROM inquiries 
        WHERE status = ${status}::inquiry_status
        ORDER BY created_at DESC 
        LIMIT ${limit} OFFSET ${offset}
      `;
    } else {
      query = sql`
        SELECT * FROM inquiries 
        ORDER BY created_at DESC 
        LIMIT ${limit} OFFSET ${offset}
      `;
    }

    const rows = await query;

    // Get total count
    const countResult = await sql`SELECT COUNT(*)::int as total FROM inquiries`;

    return NextResponse.json({
      inquiries: rows,
      total: countResult[0].total,
    });
  } catch (error) {
    console.error("Leads GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

// PATCH: Update inquiry status
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, priority, adminNotes, assignedTo } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Inquiry ID is required" },
        { status: 400 }
      );
    }

    // Build update based on provided fields
    if (status && priority) {
      await sql`
        UPDATE inquiries 
        SET status = ${status}::inquiry_status, priority = ${priority},
            admin_notes = COALESCE(${adminNotes || null}, admin_notes),
            assigned_to = COALESCE(${assignedTo || null}, assigned_to),
            contacted_at = CASE WHEN ${status} = 'contacted' THEN now() ELSE contacted_at END,
            updated_at = now()
        WHERE id = ${id}
      `;
    } else if (status) {
      await sql`
        UPDATE inquiries 
        SET status = ${status}::inquiry_status,
            contacted_at = CASE WHEN ${status} = 'contacted' THEN now() ELSE contacted_at END,
            updated_at = now()
        WHERE id = ${id}
      `;
    } else if (priority) {
      await sql`
        UPDATE inquiries 
        SET priority = ${priority}, updated_at = now()
        WHERE id = ${id}
      `;
    }

    // Fetch updated record
    const result = await sql`SELECT * FROM inquiries WHERE id = ${id}`;

    return NextResponse.json({
      success: true,
      inquiry: result[0] || null,
    });
  } catch (error) {
    console.error("Leads PATCH error:", error);
    return NextResponse.json(
      { error: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}
