import { Sheep, Soup, Package, ChefHat, Warehouse, Truck, Users } from "lucide-react";
import { CardSummary } from "@/shared/ui";

const DataMasterAdmin = () => {
  const dataSummary = [
    { title: "Data Hewan", count: 23, icon: Sheep, link: "/admin/data-master/hewan", color: "bg-green-500" },
    { title: "Data Menu", count: 12, icon: Soup, link: "/admin/data-master/menu", color: "bg-yellow-500" },
    { title: "Data Paket", count: 8, icon: Package, link: "/admin/data-master/paket", color: "bg-blue-500" },
    { title: "Petugas Dapur", count: 4, icon: ChefHat, link: "/admin/data-master/petugas-dapur", color: "bg-orange-500" },
    { title: "Petugas Kandang", count: 3, icon: Users, link: "/admin/data-master/petugas-kandang", color: "bg-purple-500" },
    { title: "Petugas Kurir", count: 5, icon: Truck, link: "/admin/data-master/petugas-kurir", color: "bg-cyan-500" },
    { title: "Data Dapur", count: 2, icon: Warehouse, link: "/admin/data-master/dapur", color: "bg-pink-500" },
    { title: "Data Kandang", count: 3, icon: Warehouse, link: "/admin/data-master/kandang", color: "bg-teal-500" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Data Master</h1>
      <p className="text-gray-500">Ringkasan seluruh data master sistem Siqah</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dataSummary.map((item, index) => (
          <CardSummary key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DataMasterAdmin;

