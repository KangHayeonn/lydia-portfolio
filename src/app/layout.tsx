import "@/assets/scss/style.scss";

export const metadata = {
  title: "Lydia Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Next.js를 이용해 만든 프론트엔드 역량을 소개하는 포트폴리오 사이트입니다. (Lydia)",
  metadataBase: new URL("https://www.lydia-portfolio.site/"),
  keywords: [
    "포트폴리오",
    "넥스트",
    "리디아",
    "강하연",
    "프론트엔드",
    "portfolio",
    "next.js",
    "nextjs",
    "Lydia",
    "front",
    "front-end",
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
