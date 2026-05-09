
export default function Terminal() {
  return (
    <div className="bg-black border border-green-500 rounded-2xl p-6 font-mono">
      <p className="text-green-400">
        visitor@portfolio:~$ whoami
      </p>

      <p className="text-white mt-2">
        Aniruddha Rajendra Shinde
      </p>

      <p className="text-green-400 mt-6">
        visitor@portfolio:~$ skills
      </p>

      <p className="text-white mt-2">
        Next.js, React, AI, Branding, Full Stack Development
      </p>
    </div>
  )
}
