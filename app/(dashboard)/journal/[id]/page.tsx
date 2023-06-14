import Editor from "@/app/components/Editor";
import { prisma } from "@/utils/db";

const getEntry = async (id: string) => {
  const entry = await prisma.journalEntry.findUnique({
    where: {
      id,
    },
  });

  return entry;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
  return (
    <div className="">
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;
