import { motion } from "framer-motion";
import MyBarChart from "./MyBarChart";

function TicketGraphs() {
  return (
    <motion.div className="flex justify-center w-full mx-auto">
      <table className="w-11/12 h-52 mt-10">
        <thead>
          <tr>
            <th className="bg-gray-200 border border-gray-100 h-16 text-gray-600 text-xl">
              Tickets by Status
            </th>
            <th className="bg-gray-200 border border-gray-100 h-16 text-gray-600 text-xl">
              Tickets by Priority
            </th>
            <th className="bg-gray-200 border border-gray-100 h-16 text-gray-600 text-xl">
              Tickets by Type
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border w-1/3 h-60 p-8">
              <div className="flex justify-between items-center w-full my-2 mx-auto">
                <div className="bg-[#E38627] grow h-2 w-2"></div>
                <span className="mx-2 text-[12px] whitespace-nowrap">Open</span>
                <div className="bg-[#C13C37] grow h-2 w-2"></div>
                <span className="mx-2 text-[12px] whitespace-nowrap">
                  In Progress
                </span>
                <div className="bg-[#6A2135] grow h-2 w-2"></div>
                <span className="mx-2 text-[12px] whitespace-nowrap">
                  Resolved
                </span>
              </div>
            </td>
            <td className="border w-1/3 h-60 pt-8">
              <MyBarChart />
            </td>
            <td className="border w-1/3 h-60 p-8">
              <div className="flex justify-between items-center w-full my-2 mx-auto">
                <div className="bg-[#E63946] grow h-2 w-2"></div>
                <span className="mx-2 text-[12px] whitespace-nowrap">
                  Prototype
                </span>
                <div className="bg-[#A8DADC] grow h-2 w-2"></div>
                <span className="mx-2 text-[12px] whitespace-nowrap">
                  Engineering
                </span>
                <div className="bg-[#1D3557] grow h-2 w-2"></div>
                <span className="mx-2 text-[12px] whitespace-nowrap">
                  Fixture
                </span>
                <div className="bg-[#8338EC] grow h-2 w-2"></div>
                <span className="mx-2 text-[12px] whitespace-nowrap">Misc</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}

export default TicketGraphs;
