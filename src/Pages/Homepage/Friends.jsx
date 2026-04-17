import React, { useEffect, useState } from "react";
import Friend from "./subdata/Friend";


const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // ডাটা আসছে কিনা দেখো
        setFriends(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="bg-gray-100  py-6 px-4 sm:py-10 sm:px-6 justify-start">
      
  <div className="max-w-7xl mx-auto">
<h3 class="text-xl font-bold mb-4">
  Your Friend
</h3>
    {friends.length === 0 ? (
      /* Centering the loading state in the viewport */
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 font-medium animate-pulse">Loading friends...</p>
      </div>
    ) : (
      /* Responsive Grid Strategy:
         - 1 col: Default (Mobile)
         - 2 cols: sm (640px+)
         - 3 cols: lg (1024px+)
         - 4 cols: xl (1280px+) 
      */
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    )}

  </div>
</div>
  );
};

export default Friends;