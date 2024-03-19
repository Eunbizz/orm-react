export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div
        style={{ backgroundColor: "#f5f5f5", height: "70px", width: "1250px" }}
      >
        블로깅 공용 상단 메뉴 영역
      </div>
      {children}
    </>
  );
}
