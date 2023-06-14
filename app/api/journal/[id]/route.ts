import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }) => {
  const { content } = await request.json();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      id: params.id,
    },
    data: {
      content,
    },
  });

  revalidatePath("/journal");

  return NextResponse.json({ data: updatedEntry });
};
