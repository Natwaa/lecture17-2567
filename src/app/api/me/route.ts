import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Natwara Chaiyasit",
    studentId: "660610758",
  });
};
