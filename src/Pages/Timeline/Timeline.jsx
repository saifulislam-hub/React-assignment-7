import React from 'react';
import { useTimeline } from '../../context/TimelineContext';

const Timeline = () => {
  const { timelineData } = useTimeline();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">Timeline</h2>
      
      <div className="space-y-4">
        {timelineData.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl border-2 border-dashed">
             <p className="text-gray-500">No activity yet. Start a check-in from friend details!</p>
          </div>
        ) : (
          timelineData.map((item) => (
            <div key={item.id} className="flex items-center gap-5 p-4 bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              {/* আইকন কন্টেইনার */}
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full text-2xl shadow-inner">
                {item.type === "Call" && "📞"}
                {item.type === "Text" && "💬"}
                {item.type === "Video" && "🎥"}
              </div>

              {/* টেক্সট কন্টেইনার */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  <span className="text-blue-600 capitalize">{item.type}</span> with {item.title.split(' with ')[1]}
                </h4>
                <p className="text-sm text-gray-400 font-medium">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;