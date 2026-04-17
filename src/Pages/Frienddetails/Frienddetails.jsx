import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useTimeline } from "../../context/TimelineContext";

const FriendDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);


const { addTimelineEntry, toast } = useTimeline();

console.log('timeLinecl');
  useEffect(() => {
    // আপনার JSON ফাইল থেকে ডাটা ফেচ করুন
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const foundFriend = data.find((f) => f.id === parseInt(id));
        setFriend(foundFriend);
      });
  }, [id]);

  if (!friend) return <div className="p-10 text-center text-gray-500">Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-10">
      {/* Back Button */}
      {toast && (
        <div className="fixed top-5 right-5 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          ✅ {toast}
        </div>
      )}
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* বাম পাশের প্রোফাইল সেকশন */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-50"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">{friend.name}</h2>
            
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="bg-red-100 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {friend.status}
              </span>
              {friend.tags.map((tag, i) => (
                <span key={i} className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-500 italic mt-6 text-sm">
              "{friend.note || "Former colleague, great mentor"}"
            </p>
            <p className="text-gray-400 text-xs mt-2">Preferred: {friend.preferred_method || "email"}</p>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="bg-white rounded-xl  shadow-sm border border-gray-100 overflow-hidden text-sm">
            <button  className="w-full py-4 px-6 justify-center   hover:bg-gray-50 flex items-center gap-3">
              ⏰ Snooze 2 Weeks
            </button>
            <button className="w-full py-4 px-6 text-left justify-center  hover:bg-gray-50 flex items-center gap-3">
              📥 Archive
            </button>
            <button className="w-full py-4 px-6 text-left justify-center text-red-500 hover:bg-red-50 flex items-center gap-3">
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* ডান পাশের স্ট্যাটাস এবং গোল সেকশন */}
        <div className="md:col-span-8 space-y-6">
          
          {/* উপরের ৩টি কার্ড */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <p className="text-3xl font-bold text-gray-800">{friend.days_since_contact}</p>
              <p className="text-xs text-gray-400 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <p className="text-3xl font-bold text-gray-800">{friend.goal_days || 30}</p>
              <p className="text-xs text-gray-400 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <p className="text-2xl font-bold text-emerald-800">Feb 27, 2026</p>
              <p className="text-xs text-gray-400 mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h4 className="text-gray-800 font-semibold">Relationship Goal</h4>
              <p className="text-gray-500 text-sm mt-1">
                Connect every <span className="font-bold text-black">{friend.goal_days || 30} days</span>
              </p>
            </div>
            <button className="px-4 py-1.5 border rounded-lg text-sm font-medium hover:bg-gray-50">Edit</button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-gray-800 font-semibold mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-4">
               <button onClick={() => addTimelineEntry("Call", friend?.name)} className="flex flex-col items-center gap-2 p-5 bg-gray-50 rounded-2xl hover:bg-blue-50 transition border border-transparent hover:border-blue-200" >
                 <span className="text-xl">📞</span>
                 <span className="text-sm font-medium">Call</span>
               </button>
               <button onClick={() => addTimelineEntry("Text", friend.name)} className="flex flex-col items-center gap-2 p-5 bg-gray-50 rounded-2xl hover:bg-blue-50 transition border border-transparent hover:border-blue-200">
                 <span className="text-xl">💬</span>
                 <span className="text-sm font-medium">Text</span>
               </button>
               <button onClick={() => addTimelineEntry("Video", friend.name)} className="flex flex-col items-center gap-2 p-5 bg-gray-50 rounded-2xl hover:bg-blue-50 transition border border-transparent hover:border-blue-200">
                 <span className="text-xl">🎥</span>
                 <span className="text-sm font-medium">Video</span>
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetail;