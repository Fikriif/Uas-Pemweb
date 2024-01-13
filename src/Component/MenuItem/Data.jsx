// import { useState } from "react";
import { useRef } from "react"

const Data = () => {
  const ref = useRef();
  // const [induk, setInduk] = useState('')
  // const [nama, setNama] = useState('')
  // const [alamat, setAlamat] = useState('')
  // const [tahun, setTahun] = useState('')
  // const [asal, setAsal] = useState('')

  const handleInput = () => {
    encodeURI
    alert(ref.current.value)
  }
  return (
    <>
      <div className="text-white mt-44">
        <div>Siswa</div>
        <div className="text-black flex flex-col gap-3 w-1/2">
          <input type="text" ref={ref} placeholder="Nomor Induk Mahasiswa" className="p-1 rounded-xl"/>
        <input type="text" ref={ref} placeholder="Nama" className="p-1 rounded-xl"/>
        <input type="text" ref={ref} placeholder="Alamat" className="p-1 rounded-xl"/>
        <input type="text" ref={ref} placeholder="Masuk Tahun Ajar" className="p-1 rounded-xl"/>
        <input type="text" ref={ref} placeholder="Asal Sekolah Dasar" className="p-1 rounded-xl"/>
        </div>
        {/* <input type="submit" className="p-1 rounded-xl" /> */}
        <button className="p-1 rounded-xl" onClick={handleInput} >Submit</button>
      </div>
    </>
  )
}

export default Data