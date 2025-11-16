import Link from "next/link";


const ComingSoon = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-4">
      <h1 className="text-5xl font-bold text-center mb-4">Coming Soon</h1>
      <p className="text-center text-gray-300 mb-12">Please check back later</p>

      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center">Our Team</h2>

        <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold">
              SR
            </div>
            <p className="mt-2 font-medium">Shamim Reza</p>
            <p className="text-gray-400 text-sm">Backend Developer</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold">
              AM
            </div>
            <p className="mt-2 font-medium">Al Mamun</p>
            <p className="text-gray-400 text-sm">UI/UX & Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ComingSoon;