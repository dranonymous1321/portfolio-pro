
import Hero from "@/components/Hero"
import Terminal from "@/components/Terminal"

export default function Home() {
  return (
    <main className="bg-[#050816] min-h-screen text-white">
      <Hero />
      <div className="max-w-5xl mx-auto py-20">
        <Terminal />
      </div>
    </main>
  )
}
