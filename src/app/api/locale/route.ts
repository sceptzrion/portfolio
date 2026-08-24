import {
  NextResponse,
} from "next/server";

import {
  hasLocale,
  localeCookieName,
} from "@/i18n/config";

type LocaleRequest = {
  locale?: unknown;
};

export async function POST(
  request: Request,
) {
  let body: LocaleRequest;

  try {
    body =
      (await request.json()) as LocaleRequest;
  } catch {
    return NextResponse.json(
      {
        message:
          "Invalid request body.",
      },
      {
        status: 400,
      },
    );
  }

  if (!hasLocale(body.locale)) {
    return NextResponse.json(
      {
        message:
          "Unsupported locale.",
      },
      {
        status: 400,
      },
    );
  }

  const response =
    NextResponse.json({
      locale: body.locale,
    });

  response.cookies.set(
    localeCookieName,
    body.locale,
    {
      path: "/",
      maxAge:
        60 * 60 * 24 * 365,
      sameSite: "lax",
      httpOnly: true,
      secure:
        process.env.NODE_ENV ===
        "production",
    },
  );

  return response;
}