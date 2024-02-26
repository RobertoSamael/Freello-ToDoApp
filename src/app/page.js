import Board from "@/components/Board";
import Header from "@/components/Header";

export default function Home() {
  return (
    <section className="flex flex-col w-screen h-screen">
      <Header/>
      <Board/>
    </section>
  );
}
