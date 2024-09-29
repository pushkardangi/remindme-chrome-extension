  function checkForEvents() {
    const today = new Date().toISOString().slice(0, 10); // Get today's date in 'YYYY-MM-DD' format
    
    chrome.storage.sync.get({ events: [] }, function(data) {
      let events = data.events;
      
      events.forEach((event, index) => {
        if (event.date === today) {
          // Trigger notification
          showNotification(event.name);
  
          // Handle recurrence
          if (event.recurrence === 'once') {
            // Remove "once" event after notification
            events.splice(index, 1);
          } else if (event.recurrence === 'every year') {
            // Update the event date to the same day next year
            let nextYearDate = new Date(event.date);
            nextYearDate.setFullYear(new Date().getFullYear() + 1);
            event.date = nextYearDate.toISOString().slice(0, 10); // Update the date in 'YYYY-MM-DD' format
          }
        }
      });
  
      // Save the updated events array back to chrome storage
      chrome.storage.sync.set({ events: events }, function() {
        console.log("Event list updated after checking today's events.");
      });
    });
  }
  
  
  // Function to show notifications
  function showNotification(eventName) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Event Reminder',
      message: `It's time for ${eventName}!`,
      requireInteraction: true // notification stays visible until the user closes it
    });
  }
  
  
  // Event listener for when the browser starts
  chrome.runtime.onStartup.addListener(() => {
    console.log("Browser started, checking for events...");
    checkForEvents(); // Run the event check when the browser starts
  });
  
  // Event listener for when the extension is installed or updated
  chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed or updated, checking for events...");
    checkForEvents(); // Run the event check when the extension is installed/updated
  });
  
  // Still keep the daily alarm check as a fallback
  chrome.alarms.create('checkEvents', { periodInMinutes: 1440 }); // Runs once a day
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'checkEvents') {
      console.log("Daily alarm triggered, checking for events...");
      checkForEvents(); // Run the event check on the daily alarm
    }
  });
 