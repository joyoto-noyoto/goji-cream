// ThankfulPage.tsx
"use client";
import { useRouter } from "next/navigation";

const ThankfulPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Thank You For Your Order!
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          Our Customer Manager Will Contact You.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankfulPage;
