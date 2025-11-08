import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50">
        <Phone className="w-6 h-6" />
      </button>

      <button className="fixed bottom-24 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 z-50">
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}
