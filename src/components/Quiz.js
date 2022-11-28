import React from "react";

export default function Quiz() {
  return (
    <div className="mt-2 mb-4 pb-4 border-b-2">
      <p className="mb-3 text-lg font-semibold">
        How would one say goodbye in Spanish?
      </p>
      <div>
        <span className="rounded border border-cyan-800 mr-2 px-2 py-1 cursor-pointer hover:bg-gray-700">
          Adiós
        </span>
        <span className="rounded border border-cyan-800 mr-2 px-2 py-1 cursor-pointer hover:bg-gray-700">
          Hola
        </span>
        <span className="rounded border border-cyan-800 mr-2 px-2 py-1 cursor-pointer hover:bg-gray-700">
          Au Revoir
        </span>
        <span className="rounded border border-cyan-800 mr-2 px-2 py-1 cursor-pointer hover:bg-gray-700">
          Salir
        </span>
      </div>
    </div>
  );
}
