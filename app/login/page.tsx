export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">
          Login
        </h2>

        <input
          className="w-full mb-3 p-3 border rounded-lg"
          placeholder="Email"
        />

        <input
          className="w-full mb-4 p-3 border rounded-lg"
          placeholder="Password"
          type="password"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );
}
