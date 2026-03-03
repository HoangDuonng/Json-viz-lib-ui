export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Header / sidebar có thể thêm ở đây */}
      <main>{children}</main>
    </div>
  );
}
