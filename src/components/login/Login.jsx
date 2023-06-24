import React from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const password = e.target.password.value

    if (name === 'foo' && password === 'bar') {
        navigate("/Contact")
    }
}

  return (
    <div className=" flex justify-center items-center">
      <div className=" w-[300px] bg-gray-50 rounded-lg shadow-lg p-7 mt-11">
        <p className=" text-lg font-extrabold ">Contact list</p>
        <p>Log in</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="p-2 mt-8 rounded-xl border"
            type="user"
            name="name"
            placeholder="User"
          />
          <div className="relative">
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
          </div>
          <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
