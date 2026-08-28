# # import frappe

# # @frappe.whitelist(allow_guest=True)
# # def library_signup(full_name, email_address, phone_number=None, membership_type=None):

# #     doc = frappe.new_doc("Library Signup Request")

# #     doc.full_name = full_name
# #     doc.email_address = email_address
# #     doc.phone_number = phone_number
# #     doc.membership_type = membership_type

# #     doc.insert(ignore_permissions=True)

# #     frappe.db.commit()

# #     return "Signup Request Submitted Successfully!"
# # import frappe

# # @frappe.whitelist()
# # def test_only_for():
# #     frappe.only_for("System Manager")

# #     return "You are allowed to execute this method!"
# import frappe


# @frappe.whitelist()
# def test_post_commit():
#     frappe.db.set_value(
#         "Book",
#         "BOOK-001",
#         "status",
#         "Issued"
#     )

#     return "Book status changed successfully"
# import frappe
# from frappe.query_builder import DocType


# @frappe.whitelist()
# def update_books_using_apis():
#     Book = DocType("Book")
#     Author = DocType("Author")

#     # 1. Query Builder
#     # Join Book with Author using Book.author = Author.name
#     books = (
#         frappe.qb.from_(Book)
#         .inner_join(Author)
#         .on(Book.author == Author.name)
#         .select(
#             Book.name,
#             Book.title,
#             Book.author,
#             Author.author_name,
#             Book.status
#         )
#         .limit(5)
#         .run(as_dict=True)
#     )

#     # Stop if no books are found
#     if not books:
#         return {
#             "message": "No books found",
#             "data": []
#         }

#     # 2. Document API
#     # Fetch the first Book returned by Query Builder
#     first_book = frappe.get_doc("Book", books[0]["name"])

#     # Update a field
#     first_book.status = "Available"

#     # Save the document
#     first_book.save()

#     # 3. Database API
#     # Update status for all books returned by the query
#     # set_value bypasses document validation/controller methods
#     for book in books:
#         frappe.db.set_value(
#             "Book",
#             book["name"],
#             "status",
#             "Available"
#         )

#     # 4. Return Query Builder results
#     return {
#         "message": "Books fetched and updated successfully",
#         "data": books
#     }
# import frappe
# from Library_managemnt.search import LibrarySearch


# @frappe.whitelist()
# def search_books(query, filters=None):
#     search = LibrarySearch()
#     result = search.search(query, filters=filters)
#     return result


# import frappe

# @frappe.whitelist()
# def book_action():
#     frappe.msgprint("Python method executed!")
#     return "Success"

import frappe

@frappe.whitelist()
def create_task(task_subject):
    task = frappe.new_doc("Task")
    task.subject = task_subject
    task.save()

    return task.name

