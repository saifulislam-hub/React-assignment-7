import React, { createContext, useState, useContext } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);
  const [toast, setToast] = useState(null);

  // Function to add a new entry
  const addTimelineEntry = (type, personName) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      title: `${type} with ${personName}`,
      // Formatting date like "March 29, 2026"
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    // Update timeline list
    setTimelineData((prev) => [newEntry, ...prev]);

    // Show Toast
    setToast(`${type} added successfully!`);
    setTimeout(() => setToast(null), 3000); // Hide after 3 seconds
  };

  return (
    <TimelineContext.Provider value={{ timelineData, addTimelineEntry, toast }}>
      {children}
    </TimelineContext.Provider>
  );
};

// Custom hook for easier usage
export const useTimeline = () => useContext(TimelineContext);