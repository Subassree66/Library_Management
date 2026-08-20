# LMS Frappe Assignments

## Assignment 2: python-api-documentation Assignment
### Files
- library_management/api/__init__.py
- screenshots/postman_api_test.png
### API Method
- update_books_using_apis()
### API Endpoint
- /api/method/library_management.api.update_books_using_apis
### APIs Used
- Whitelisted API using `@frappe.whitelist()`
- Query Builder
- Document API using `frappe.get_doc()`
- Database API using `frappe.db.set_value()`
### Query Builder
- Joined `Book` and `Author` DocTypes
- Retrieved up to 5 records
### Document API
- Fetched one Book using `frappe.get_doc()`
- Updated the Book status
- Saved the document using `.save()`
### Database API
- Updated the status of all retrieved Books using `frappe.db.set_value()`
### Postman Testing
- API tested successfully using Postman
- Successful JSON response received from the API endpoint
### Screenshot
https://drive.google.com/file/d/1BTHblkZv9QiTCY_G8vrFS25yHxovPKeA/view?usp=sharing

## Assignment 3: python-api-background-jobs Assignment
### Files
- library_management/tasks.py
- library_management/hooks.py
### Scheduler Method
- daily_maintenance()
### Scheduler Configuration
- Added `scheduler_events` dictionary in `hooks.py`
- Configured `daily_maintenance` to run on a `daily` interval
### APIs Used
- `frappe.log_error()` — logs a message confirming job execution
### Verification
- Ran `bench migrate` to sync scheduler hooks to the database
- Confirmed job registration under **Scheduled Job Type** doctype list
- Method shown: `library_management.tasks.daily_maintenance`
- Frequency: Daily
### Screenshot
https://drive.google.com/file/d/1TU-sJ-QRk7-ctFq152pyXvVUAqfKepR9/view?usp=sharing
