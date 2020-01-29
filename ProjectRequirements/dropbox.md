## Dropbox-style App

The Dropbox-style application will allow a User to upload and download files on your site.  Your site should consist of the following functionality:

### Tags

- The User should be able to add tags (think #hashtags) to each file that is uploaded.
- Tags can be added/removed when the file is initially uploaded, or later from within your application.

### Search

- The User should be able to search for files by entering a single keyword or phrase.
- _For this application, you can consider a phrase as a single string._
- For a file to show up as a search result, one of the following must be true about the keyword or phrase that was entered:
- It must be a substring of the file name.
- It must be a substring of one or more tags associated with a file.

### User Interface
- A User should be presented with an intuitive User Interface (UI) that allows the User to browse all files within your application.
- A User should be able to download a file from the UI.
- A User should be able to delete a file from your application.

### Extra Credit- Synchronization (10 pts)
- If a file is added or removed while a User is using your application, the UI should update immediately reflect the changes.
- To receive credit - you must accomplish this with WebSockets.