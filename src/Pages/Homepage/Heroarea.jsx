import React from 'react';

const Heroarea = () => {
  return (
    <div>
      <div class=" font-sans bg-gray-50">

  <main class="py-16 px-6 max-w-6xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Friends to keep close in your life</h2>
    <p class="text-sm text-gray-500 max-w-md mx-auto mb-8">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
    
    <button class="bg-[#2D5344] text-white px-6 py-2 rounded flex items-center mx-auto hover:bg-[#1D4335] transition font-medium mb-16">
      <span class="mr-2">+</span> Add a Friend
    </button>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-3xl font-bold text-gray-800">10</h3>
        <p class="text-xs text-gray-500 uppercase mt-2">Total Friends</p>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-3xl font-bold text-gray-800">3</h3>
        <p class="text-xs text-gray-500 uppercase mt-2">On Track</p>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-3xl font-bold text-gray-800">6</h3>
        <p class="text-xs text-gray-500 uppercase mt-2">Need Attention</p>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-3xl font-bold text-gray-800">12</h3>
        <p class="text-xs text-gray-500 uppercase mt-2">Interactions This Month</p>
      </div>
    </div>
  </main>

</div>
    </div>
  );
};

export default Heroarea;