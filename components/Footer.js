export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Arjit Tripathi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}