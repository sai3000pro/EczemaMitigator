import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const EczemaStat = () => {
  const data = [
    { name: "Eczema", value: 20 },
    { name: "Other", value: 80 },
  ];

  const COLORS = ["#1E90FF", "#4682B4"];

  const onHoverStyle = {
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  return (
    <div className="bg-lightblue-200 p-6 rounded-lg shadow-lg w-full mx-1">
      {/* First Heading */}
      <h2 className="text-center text-2xl font-semibold text-blue-800 mb-6">
        15-20% of the Canadian population are diagnosed with some form of
        eczema.
      </h2>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value">
            {data.map((entry, index) => (
              <motion.g
                key={`cell-${index}`}
                whileHover={entry.value === 20 ? onHoverStyle : {}}
              >
                <Cell fill={COLORS[index % COLORS.length]} />
              </motion.g>
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Second Heading */}
      <h2 className="text-center text-2xl font-semibold text-blue-800 mt-6 mb-4">
        But it doesn't have to be inconvenient.
      </h2>
    </div>
  );
};

export default EczemaStat;
