import React from 'react'
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

  return (
    <div>
      <div className="w-full h-[100vh]">
        <h6 className="text-blue-800 font-bold">Home</h6>
        <h1 className="text-3xl font-bold text-gray-800">
          Emosi Manusia Terhadap Dampak Teknologi AI Bulan Agustus 2024
        </h1>
        <div className="flex">
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Data Emosi dalam Bentuk Grafik
            </h3>
            <BarChart width={730} height={250} data={data}>
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
        <div className="mt-10 w-[50%] overflow-x-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-5">
            Data Emosi dalam Bentuk Tabel
          </h3>
          <Table data={data} />
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://via.placeholder.com/150"
                alt="Card"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Judul
              </div>
              <p className="mt-2 text-gray-500">Konten</p>
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
