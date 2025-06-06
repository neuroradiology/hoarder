import { NextRequest } from "next/server";
import { buildHandler } from "@/app/api/v1/utils/handler";

export const dynamic = "force-dynamic";

export const POST = (
  req: NextRequest,
  params: { params: { bookmarkId: string } },
) =>
  buildHandler({
    req,
    handler: async ({ api }) => {
      const bookmark = await api.bookmarks.summarizeBookmark({
        bookmarkId: params.params.bookmarkId,
      });

      return { status: 200, resp: bookmark };
    },
  });
