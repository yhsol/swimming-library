export default function SwimmingStylesPage() {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
        Explore Swimming Techniques
      </h1>
      <p className="mt-4 text-base md:text-lg text-gray-600">
        Choose a category to learn and improve your swimming skills.
      </p>
      <div className="mt-6 md:mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="/swimming-styles/freestyle"
          //   className="w-full sm:w-auto px-6 py-3 text-lg font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors" => 선택 됐을 때 색상
          className="w-full sm:w-auto px-6 py-3 text-lg font-medium text-black bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Freestyle
        </a>
        <a
          href="/swimming-styles/butterfly"
          className="w-full sm:w-auto px-6 py-3 text-lg font-medium text-black bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Butterfly
        </a>
        <a
          href="/swimming-styles/backstroke"
          className="w-full sm:w-auto px-6 py-3 text-lg font-medium text-black bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Backstroke
        </a>
        <a
          href="/swimming-styles/breaststroke"
          className="w-full sm:w-auto px-6 py-3 text-lg font-medium text-black bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Breaststroke
        </a>
      </div>
    </div>
  );
}
