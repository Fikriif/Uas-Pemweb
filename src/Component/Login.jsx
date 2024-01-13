import { TbBus } from "react-icons/tb";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {

  return (
    <>
      <div>
        <nav className="p-3 shadow-2xl border-b-2 flex justify-center text-2xl font-bold text-white">SMK N 1 Adiwerna</nav>
        <div className="flex justify-center my-6 text-5xl text-white font-semibold" >Sekolah Peringkat 1</div>
        <div className="flex flex-row-2 gap-20 justify-center mt-5 ">
        <div>
          <img src="\Login\uaspemweb1.png" alt="Logo" width={300} height={300} />
        </div>
        <div className="flex flex-col gap-3 mt-2 justify-center text-white font-semibold text-md">
          <div>Username</div>
          <input placeholder="Masukan Username" className="border-2 text-black" />
          <div>Passowrd</div>
          <input placeholder="Masukan Password" className="border-2 text-black" />
          <Link to="/dashboard" className="pt-4">
          <button className="bg-white text-black py-1 w-1/2 rounded-xl">Sign In</button>
          </Link>
          <div className="mt-5">Lupa Password?</div>
        </div>
      </div>
      <div className="mx-32 mt-28 flex justify-between">
        <div><TbBus className="w-16 h-16 text-white" /></div>
        <div><FaSchool className="w-16 h-16 text-white" /></div>
      </div>
      </div>
    </>
  )
}

export default Login
