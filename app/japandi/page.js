import Image from "next/image";

const japandiImages = [
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    alt: "Japandi Interior 1"
  },
  {
    src: "https://images.pexels.com/photos/8251243/pexels-photo-8251243.jpeg",
    alt: "Japandi Interior 2"
  },
  {
    src: "https://images.pexels.com/photos/8251487/pexels-photo-8251487.jpeg",
    alt: "Japandi Interior 3"
  },
  {
    src: "https://images.pexels.com/photos/8251592/pexels-photo-8251592.jpeg",
    alt: "Japandi Interior 4"
  }
];

export default function Japandi() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-8 bg-green-50">

      <h1 className="text-4xl font-bold mb-4">Japandi</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-4">
        Japandi blends Japanese and Scandinavian design. It’s minimalist, warm, and functional, with natural materials and muted colors. Here are some inspiring examples:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
        {japandiImages.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              className="object-cover rounded-lg shadow"
            />
          </div>
        ))}
      </div>

      <div className="h-[65vh] w-full bg-bottom bg-cover bg-fixed rounded-lg shadow-lg mb-6
      bg-[url('https://images.pexels.com/photos/29383010/pexels-photo-29383010.jpeg')]
      flex items-center justify-center">
        <h1 className="text-xl text-gray-800">Japandi</h1>
      </div>

      <div className="max-w-xl text-left mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-2">Japandi Design Elements</h2>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>Natural materials like wood and stone</li>
          <li>Muted, earthy color palettes</li>
          <li>Functional, minimalist furniture</li>
          <li>Balance of warmth and simplicity</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Why Japandi?</h2>
        <p className="text-gray-700">Japandi combines the best of Japanese and Scandinavian design, creating interiors that are both tranquil and functional.</p>
      </div>

    </div>
  );
}

