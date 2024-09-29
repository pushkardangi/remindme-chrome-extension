const statusMessage = document.getElementById("statusMessage");

function clearStatusMessage(delay = 3000) {
  setTimeout(function () {
      statusMessage.textContent = "";
  }, delay);
}

document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const eventName = document.getElementById("eventName").value;
  const eventDate = document.getElementById("eventDate").value;
  const recurrence = document.querySelector('input[name="recurrence"]:checked').value;

  //store the event here using chrome.storage.sync
  if (eventName && eventDate) {
    chrome.storage.sync.get({ events: [] }, function (data) {
      
      const events = data.events;
      events.push({ name: eventName, date: eventDate, recurrence: recurrence });

      chrome.storage.sync.set({ events: events }, function () {

        displayEvents();
        statusMessage.textContent = "Event successfully added!";
        statusMessage.style.color = "green";
        clearStatusMessage();
      });
    });
  }

  // Clear the form
  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
});

// Function to display events
function displayEvents() {
  chrome.storage.sync.get({ events: [] }, function(data) {
    const events = data.events;
    const eventListDiv = document.getElementById("eventList");

    // Check if there are any events
    if (events.length > 0) {
      
      // Loop through the events
      let eventListHtml = "<ul>";
      events.forEach((event, index) => {
        eventListHtml += `
          <li>
          <b>${event.name}</b> (${event.date}) Remind: ${event.recurrence}
          </li>`;
      });
      eventListHtml += "</ul>";
        
      deleteAllBtn.style.display = 'block'; // display delete button
      eventListDiv.style.textAlign = 'left';
      eventListDiv.innerHTML = eventListHtml;
    } else {
      eventListDiv.innerHTML = "";
      deleteAllBtn.style.display = 'none'; // hide delete button
      eventListDiv.style.textAlign = 'center';
    }
  });
}

// Function to delete all events
function deleteAllEvents() {
  chrome.storage.sync.set({ events: [] }, function() {

    statusMessage.textContent = "All Events deleted!";
    statusMessage.style.color = "red";
    clearStatusMessage();
    displayEvents(); // Refresh the list after deletion
  });
}

// Call the displayEvents function when the page loads
displayEvents();

// Add event listener for the "Delete All Events" button
document.getElementById('deleteAllBtn').addEventListener('click', deleteAllEvents);
