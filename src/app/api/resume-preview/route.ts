export const runtime = "nodejs";

export async function GET(
  request: Request,
) {
  try {
    const pdfUrl = new URL(
      "/documents/rizqi-yanuar-cv.pdf",
      request.url,
    );

    /*
     * Fetch happens server-side.
     * Browser download managers cannot intercept
     * this internal server request.
     */
    const response = await fetch(
      pdfUrl,
      {
        cache: "force-cache",
      },
    );

    if (!response.ok) {
      return new Response(
        "Resume preview unavailable.",
        {
          status: 502,
        },
      );
    }

    const buffer =
      await response.arrayBuffer();

    const base64 =
      Buffer.from(
        buffer,
      ).toString("base64");

    return new Response(
      base64,
      {
        status: 200,
        headers: {
          "Content-Type":
            "text/plain; charset=utf-8",
          "Cache-Control":
            "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          "X-Content-Type-Options":
            "nosniff",
        },
      },
    );
  } catch {
    return new Response(
      "Resume preview unavailable.",
      {
        status: 500,
      },
    );
  }
}
