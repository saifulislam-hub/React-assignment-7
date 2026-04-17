import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useTimeline } from "../../context/TimelineContext";

const Stats = () => {
  const { timelineData } = useTimeline();

  // ১. ডাটা প্রসেসিং: Call, Text, এবং Video এর সংখ্যা গণনা করা
  const interactionCounts = timelineData.reduce(
    (acc, curr) => {
      if (curr.type === "Call") acc.call++;
      if (curr.type === "Text") acc.text++;
      if (curr.type === "Video") acc.video++;
      return acc;
    },
    { call: 0, text: 0, video: 0 }
  );

  // ২. Recharts এর জন্য ডাটা ফরম্যাট তৈরি
  const data = [
    { name: "Text", value: interactionCounts.text, color: "#8B5CF6" }, // বেগুনি
    { name: "Call", value: interactionCounts.call, color: "#1E3A3A" }, // গাঢ় সবুজ/কালো
    { name: "Video", value: interactionCounts.video, color: "#22C55E" }, // উজ্জ্বল সবুজ
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-slate-800">Friendship Analytics</h2>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-gray-500 font-medium mb-4">By Interaction Type</p>
        
        <div className="h-[300px] w-full flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}  // ডোনাট শেপ দেওয়ার জন্য
                outerRadius={100}
                paddingAngle={8}   // স্লাইসগুলোর মাঝখানে গ্যাপ
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Legend 
                verticalAlign="bottom" 
                align="center" 
                iconType="circle"
                formatter={(value) => <span className="text-gray-600 text-sm ml-1">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;