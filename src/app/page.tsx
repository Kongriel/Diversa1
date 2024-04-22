import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-orange-100 grid place-items-center">
      <h1 className="text-orange-700 text-4xl font-bold mb-4">Hello World</h1>
      <p className="text-orange-700 mb-4">blabalbalablabalbalablabalbalbalabl</p>
      <form className="flex flex-col items-center">
        <label htmlFor="websiteUrl" className="text-orange-700 mb-2">
          Enter Website URL:
        </label>
        <input id="websiteUrl" type="text" placeholder="www.yourwebsite.com" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800" required />
        <button type="submit" className="bg-orange-700 text-white px-6 py-2 rounded-lg hover:bg-orange-800">
          Free Scan
        </button>
      </form>
    </main>
  );
}
