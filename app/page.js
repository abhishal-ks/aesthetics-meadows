                                                    // किं अहम् तत् ?
import Link from "next/link";

const themes = [
  {
    name: "Minimalism",
    href: "/minimalism",
    color: "bg-white",
    description: "Simplicity, clean lines, and uncluttered spaces.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Art Deco",
    href: "/art-deco",
    color: "bg-yellow-100",
    description: "Bold geometric shapes, rich colors, and luxury.",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Japandi",
    href: "/japandi",
    color: "bg-green-100",
    description: "Minimalist, warm, and functional blend of Japanese and Scandinavian design.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-1.5 pt-8 bg-gradient-to-br from-gray-50 to-gray-200">
      <h1 className="text-5xl font-bold mb-4">Aesthetics Meadows</h1>
      <blockquote className="italic text-gray-500 mb-6">“Design is intelligence made visible.” – Alina Wheeler</blockquote>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Discover and explore popular interior design aesthetics. Click a theme to to bask into it!
      </p>

      {/* 👇 Parallax Section */}
      <div
        className="w-full h-[50vh] md:h-[55vh] bg-fixed bg-center bg-cover mb-6 rounded-lg shadow-sm
        bg-[url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg')]
        "
      ></div>

      <div className="h-0.5 w-[90vw] bg-gradient-to-r from-red-300 to-sky-300 shadow-lg my-1"></div>

      <div className="w-full flex justify-start items-start px-4">
        <h2
        className="text-3xl font-semibold my-10 bg-gradient-to-r from-red-300 to-sky-300 px-3 py-2 rounded-lg shadow-lg"
        data-aos="fade-right"
            data-aos-delay="100"
        >Bask into the Parallels...</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 px-4">
        {themes.map((theme) => (
          <Link
            key={theme.name}
            href={theme.href}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition hover:scale-105 duration-300 ${theme.color}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={theme.img} alt={theme.name + " preview"} className="w-full h-40 object-cover rounded mb-4 shadow" />
            <span className="text-2xl font-semibold mb-2">{theme.name}</span>
            <span className="text-gray-700 mb-2">{theme.description}</span>
            <span className="text-sm text-blue-600 underline">Explore</span>
          </Link>
        ))}
      </div>
    </main>
  );
}