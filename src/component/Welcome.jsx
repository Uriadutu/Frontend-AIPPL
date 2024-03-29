import React, { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios"
import { Link } from "react-router-dom";


import BGMID from "../img/MidBG.png";

const Table = ({ data }) => {

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            No
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Emosi
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Jumlah
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={item.name}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
              <div className="text-sm font-medium text-gray-900">{index + 1}</div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="text-sm font-medium text-gray-900">
                  {item.name}
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{item[item.name]}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const Welcome = () => {

  const data = [
    
    {
      name: "Marah",
      Marah: "29",
    },
    {
      name: "Terkejut",
      Terkejut: "11",
    },
    {
      name: "Takut",
      Takut: "21",
    },
    {
      name: "Sedih",
      Sedih: "18",
    },
    {
      name: "Senang",
      Senang: "14",
    },
    {
      name: "Netral",
      Netral: "10",
    },
    
  ];
  const [activeTab, setActiveTab] = useState("grafik");
  
  const [kui, setKui] = useState([]);

  const getKui = async () => {
    try {
      const response = await axios.get("http://localhost:5011/kuisioner/data/baru");
      setKui(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKui();
  }, []);
  return (
    <div>
      <div className="w-full h-[100vh]">
        <div className="flex items-center h-10 intro-y">
          <h6 className="text-blue-800 font-bold">Beranda</h6>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">
          Emosi Manusia Terhadap Dampak Teknologi AI Bulan Agustus 2024
        </h1>
        <div className="flex mt-10">
          <button
            className={`mr-5 px-4 py-2 focus:outline-none ${
              activeTab === "grafik"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("grafik")}
          >
            Grafik
          </button>
          <button
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "tabel"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("tabel")}
          >
            Tabel
          </button>
        </div>
        <div className="flex">
          {activeTab === "grafik" && (
            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold text-gray-800 mb-5">
                Data Emosi dalam Bentuk Grafik
              </h3>
              <div className="">
                <div className="overflow-hidden border border-gray-200 rounded-lg overflow-x-auto">
                  <BarChart width={730} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Marah" fill="#4682b4" barSize={1000} />
                    <Bar dataKey="Terkejut" fill="#4682b4" barSize={1000} />
                    <Bar dataKey="Takut" fill="#4682b4" barSize={1000} />
                    <Bar dataKey="Sedih" fill="#4682b4" barSize={1000} />
                    <Bar dataKey="Senang" fill="#4682b4" barSize={1000} />
                    <Bar dataKey="Netral" fill="#4682b4" barSize={1000} />
                  </BarChart>
                </div>
              </div>
            </div>
          )}
          {activeTab === "tabel" && (
            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold text-gray-800 mb-5">
                Data Emosi dalam Bentuk Tabel
              </h3>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <Table data={data} />
              </div>
            </div>
          )}
          <div className="lg:w-1/2 pl-11">

          <div className="mt-12">
            <div className="">
              <div className="h-full">
                <div className="flex bg-blue-500 p-4 rounded-t-lg justify-center">
                  <h1 className="text-white font-bold text-xl">
                    Isi Kuesioner
                  </h1>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-b-lg ">
                  
                      <div className="">
                        <Link to={kui && kui.Linkkui}>
                          <h1 className="truncate">{kui && kui.Linkkui}</h1>
                        </Link>
                      </div>
                </div>
              </div>
            </div>
            <div className=" mt-5">
              <div className="h-full">
                <div className="flex bg-blue-500 p-4 rounded-t-lg justify-center">
                  <h1 className="text-white font-bold text-xl">Download</h1>
                </div>
                <div className="flex bg-white p-4 shadow-lg rounded-b-lg"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${BGMID})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* <div className="w-full h-[100vh]"></div> */}
    </div>
  );
}

export default Welcome
