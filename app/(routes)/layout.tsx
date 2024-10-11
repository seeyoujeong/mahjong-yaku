import { Header } from "../components";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="grid grid-rows-[50px_1fr] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
}
