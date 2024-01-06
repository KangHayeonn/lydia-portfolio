import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, () => {
    return HttpResponse.json(
      [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" },
      ],
      { status: 200 },
    );
  }),
];
