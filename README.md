<a name="readme-top"></a>

# RemindMe - Event Reminder Chrome Extension

This is a Chrome extension that allows users to save event dates, such as birthdays, and receive notifications when those events occur. Users can set events to either be reminded once or on a recurring yearly basis.

## Features

- **Add Events:** Users can add events with a name, date, and recurrence option (Once or Every Year).
- **View Events:** Users can view all the added events.
- **Notifications:** The extension notifies users on the event date.
- **Delete Events:** Users can delete individual events or all events at once.
- **Recurrence:** Set event recurrence options for either one-time notifications or yearly reminders.

## Technologies Used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- **JavaScript (ES6):** Core functionality for managing events, notifications, and storage.
- **Chrome Extensions API:** For managing Chrome alarms, notifications, and storage.
- **HTML/CSS:** UI for event input, displaying events, and buttons for event management.
- **Chrome Storage API:** For saving and retrieving events, either locally or synced across devices.

## Getting Started

Follow the steps below to get the extension running locally for development or personal use.

### Prerequisites

- **Google Chrome** (Latest Version)
- **Basic knowledge of JavaScript and Chrome Extensions**

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/pushkardangi/remindme-chrome-extension.git
    cd remindme-chrome-extension
    ```

2. **Load the Extension in Chrome:**

    1. Open Chrome and navigate to `chrome://extensions/`.
    2. Enable **Developer mode** in the top-right corner.
    3. Click **Load unpacked** and select the folder where this project is located.
    4. The extension will now appear in your extensions list.

3. **Test the Extension:**
   - Click the extension icon in your browser toolbar to open the popup and start adding events.

## Usage

1. **Add an Event:**
   - Input the event name, event date, and choose whether to receive a notification "Once" or "Every Year."
   - Click the **Add Event** button.

2. **View Events:**
   - All saved events are listed in the popup. Events include the name, date, and recurrence type.

3. **Delete Events:**
   - You can delete individual events by clicking the **Delete** button next to the event.
   - You can delete all events at once using the **Delete All Events** button.

4. **Receive Notifications:**
   - The extension will send you a notification when the event date arrives.

## How It Works

- **Data Storage:**
  - Events are stored using Chrome’s `chrome.storage.sync` API, allowing the data to be synced across multiple Chrome installations where the user is logged in.
  
- **Notifications:**
  - The extension uses `chrome.alarms` to check events daily at a set time. If the current date matches any event's date, a notification is triggered.

## Future Enhancements

- **Custom Notification Times:** Allow users to choose custom notification times.
- **Categories:** Let users categorize events (e.g., Birthdays, Anniversaries).
- **Event Edit Functionality:** Provide an option to edit existing events.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
