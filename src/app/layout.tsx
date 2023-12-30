import "@/assets/scss/style.scss";

export const metadata = {
  title: "Lydia Portfolio 📝Next-Site",
  description:
    "Next.js를 이용해 만든 저를 소개하는 포트폴리오 사이트입니다. (Lydia)",
  keywords: [
    "포트폴리오",
    "넥스트",
    "리디아",
    "강하연",
    "portfolio",
    "next.js",
    "nextjs",
    "Lydia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
