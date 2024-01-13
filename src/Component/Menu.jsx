import { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("profile");

  let classActive = "bg-white p-1 rounded-lg text-black font-bold";

  const hanldeItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <>
      <nav className="bg-neutral-900">
        <div className="shadow-xl flex flex-col items-center py-2">
          <div className="text-3xl font-bold text-white">SMK N 1 Adiwerna</div>
          <div className="text-md font-bold text-white">
            JL. Raya 2 Adiwerna Pesarean Kec. Adiwerna Kab. Tegal Provinsi Jawa
            Tengah
          </div>
        </div>
        <div className="flex flex-row justify-around gap-3 py-5 text-white text-xl font-semibold border-y-4">
          <div className={activeItem === "profile" ? classActive : ""}>
            <Link to="/profile" onClick={() => hanldeItemClick("profile")}>
              Profile
            </Link>
          </div>
          <div className={activeItem === "data" ? classActive : ""}>
            <Link to="/data" onClick={() => hanldeItemClick("data")}>
              Data Guru & Siswa
            </Link>
          </div>
          <div className={activeItem === "tabel" ? classActive : ""}>
            <Link to="/tabel" onClick={() => hanldeItemClick("tabel")}>
              Data Tabel
            </Link>
          </div>
          <div className={activeItem === "kesan" ? classActive : ""}>
            <Link to="/kesan" onClick={() => hanldeItemClick("kesan")}>
              Kesan
            </Link>
          </div>
          <div className="pt-1">
            <Link to="/">
              <LuLogOut />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
