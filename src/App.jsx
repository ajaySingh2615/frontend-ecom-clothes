import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header Section */}
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold text-primary-600">
              User Management Frontend
            </h1>
            <p className="mt-2 text-gray-600">
              Connected to backend at:{" "}
              {import.meta.env.VITE_API_BASE_URL || "Not configured"}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Tailwind Test Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Card 1 - Primary Colors */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Primary Colors
              </h2>
              <p className="text-gray-600 mb-4">
                Testing primary color palette
              </p>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-primary-500 rounded"></div>
                <div className="w-8 h-8 bg-primary-600 rounded"></div>
                <div className="w-8 h-8 bg-primary-700 rounded"></div>
              </div>
            </div>

            {/* Card 2 - Typography */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Typography
              </h2>
              <p className="text-sm text-gray-500 mb-1">Small text</p>
              <p className="text-base text-gray-700 mb-1">Base text</p>
              <p className="text-lg font-medium text-gray-900">Large text</p>
            </div>

            {/* Card 3 - Buttons */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Buttons
              </h2>
              <div className="space-y-2">
                <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Primary Button
                </button>
                <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Secondary Button
                </button>
              </div>
            </div>
          </div>

          {/* Test Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tailwind CSS Test Suite
            </h2>

            {/* Spacing Test */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Spacing Test
              </h3>
              <div className="flex gap-4">
                <div className="p-2 bg-primary-100 rounded">p-2</div>
                <div className="p-4 bg-primary-200 rounded">p-4</div>
                <div className="p-6 bg-primary-300 rounded">p-6</div>
                <div className="p-8 bg-primary-400 rounded">p-8</div>
              </div>
            </div>

            {/* Flexbox Test */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Flexbox Test
              </h3>
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span className="text-gray-700">Left Item</span>
                <span className="text-gray-700">Center Item</span>
                <span className="text-gray-700">Right Item</span>
              </div>
            </div>

            {/* Grid Test */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Grid Test
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-100 p-4 rounded text-center">1</div>
                <div className="bg-green-100 p-4 rounded text-center">2</div>
                <div className="bg-blue-100 p-4 rounded text-center">3</div>
              </div>
            </div>

            {/* Border & Shadow Test */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Borders & Shadows
              </h3>
              <div className="flex gap-4">
                <div className="border-2 border-gray-300 p-4 rounded">
                  Border
                </div>
                <div className="border-2 border-primary-500 p-4 rounded">
                  Primary Border
                </div>
                <div className="shadow-md p-4 rounded bg-white">
                  Shadow Medium
                </div>
                <div className="shadow-lg p-4 rounded bg-white">
                  Shadow Large
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-green-800 font-medium">
                  ✅ Tailwind CSS is working correctly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
