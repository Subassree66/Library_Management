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
