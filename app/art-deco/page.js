const imageArray = [
  {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    alt: "Art Deco Interior 1"
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    alt: "Art Deco Interior 2"
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    alt: "Art Deco Interior 3"
  },
  {
    src: "https://images.unsplash.com/photo-1690067323211-30ecd7522ca2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydCUyMGRlY28lMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Art Deco Interior 4"
  },
  {
    src: "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg",
    alt: "Art Deco Interior 5"
  }
];

export default function ArtDeco() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-8 bg-yellow-50">

      <h1 className="text-4xl font-bold mb-4">Art Deco</h1>
      <blockquote className="italic text-gray-500 mb-6">“Elegance is not standing out, but being remembered.” – Giorgio Armani</blockquote>
      <p className="text-lg text-gray-700 max-w-xl mb-4">
        Art Deco features bold geometric shapes, rich colors, and luxurious materials. It’s glamorous, elegant, and visually striking. Here are some inspiring examples:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {imageArray.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        ))}
      </div>

      <div className="h-96 w-full bg-center bg-cover bg-fixed rounded-lg shadow-lg mb-6
      bg-[url('https://images.pexels.com/photos/335253/pexels-photo-335253.jpeg')]
      flex items-center justify-center">
        <h1 className="text-xl text-amber-300">ArtDeco</h1>
      </div>

      <div className="max-w-xl text-left mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-2">Art Deco Highlights</h2>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>Mirrored surfaces and metallic finishes</li>
          <li>Statement furniture pieces</li>
          <li>Rich jewel tones and bold contrasts</li>
          <li>Stylized motifs and patterns</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Why Art Deco?</h2>
        <p className="text-gray-700">Art Deco brings glamour, luxury, and a sense of drama to any space, making interiors unforgettable.</p>
      </div>

    </div>
  );
}
