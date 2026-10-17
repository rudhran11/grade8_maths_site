# Grade 8 Maths Study Hub

## Update the website without uploading a ZIP each time
1. Create the new lesson/test HTML file.
2. Open the GitHub repository connected to Vercel.
3. Open the destination folder (notes/, sessions/session-XX/, or upcoming-tests/test-XX/).
4. Choose Add file → Upload files, upload only the new HTML file, and Commit changes.
5. Vercel automatically deploys the new commit to the same URL.

The `/upload.html` page is a local helper: drag/drop an HTML file to get a suggested destination path. A static site cannot permanently store dropped files itself, so GitHub is the permanent upload location.

## Deploy to Vercel
Import the repository in Vercel. Framework Preset: Other. Build Command: leave blank. Output Directory: `.` (or leave default if detected). Deploy.
