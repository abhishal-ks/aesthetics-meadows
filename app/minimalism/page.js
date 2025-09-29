
export default function Minimalism() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-8 bg-gray-50">

      <h1 className="text-4xl font-bold mb-4">Minimalism</h1>
      <blockquote className="italic text-gray-500 mb-6">“Simplicity is the ultimate sophistication.” – Leonardo da Vinci</blockquote>
      <p className="text-lg text-gray-600 max-w-xl mb-4">
        Minimalism is all about simplicity, clean lines, and uncluttered spaces. Neutral colors and functional design create a calm, serene environment. Here are some inspiring examples:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Minimalism Interior 1" className="w-full h-64 object-cover rounded-lg shadow" />
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Minimalism Interior 2" className="w-full h-64 object-cover rounded-lg shadow" />
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Minimalism Interior 3" className="w-full h-64 object-cover rounded-lg shadow" />
        <img src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg" alt="Minimalism Interior 4" className="w-full h-64 object-cover rounded-lg shadow" />
        <img src="https://images.unsplash.com/photo-1503389152951-9c3d0e3c1c73?auto=format&fit=crop&w=800&q=80" alt="Minimalism Interior 5" className="w-full h-64 object-cover rounded-lg shadow" />
      </div>

      <div className="h-96 w-full bg-top bg-cover bg-fixed rounded-lg shadow-lg mb-6
      bg-[url('https://images.pexels.com/photos/1420701/pexels-photo-1420701.jpeg')]
      flex items-center justify-center">
        <h1 className="text-xl">Minimalism</h1>
      </div>

      <div className="max-w-xl text-left mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-2">Minimalist Design Tips</h2>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>Let natural light fill the space</li>
          <li>Choose multi-functional furniture</li>
          <li>Use plants for a touch of nature</li>
          <li>Keep surfaces clear and organized</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Why Minimalism?</h2>
        <p className="text-gray-700">Minimalism promotes mindfulness, reduces stress, and creates a peaceful environment for living and working.</p>
      </div>

    </div>
  );
}
