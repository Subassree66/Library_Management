# import frappe

# @frappe.whitelist(allow_guest=True)
# def library_signup(full_name, email_address, phone_number=None, membership_type=None):
#     doc = frappe.new_doc("Library Signup Request")
#     doc.full_name = full_name
#     doc.email_address = email_address
#     doc.phone_number = phone_number
#     doc.membership_type = membership_type

#     doc.insert(ignore_permissions=True)
#     frappe.db.commit()

#     return "Signup Request Submitted Successfully!"
# import frappe

# @frappe.whitelist()
# def test_only_for():
#     frappe.only_for("System Manager")
#     return "Access granted!"
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
import frappe
from frappe.query_builder import DocType


@frappe.whitelist()
def update_books_using_apis():
    Book = DocType("Book")
    Author = DocType("Author")

    # Query Builder
    books = (
        frappe.qb.from_(Book)
        .inner_join(Author)
        .on(Book.author == Author.name)
        .select(
            Book.name,
            Book.book_title,
            Book.author,
            Author.author_name,
            Book.status
        )
        .limit(5)
        .run(as_dict=True)
    )

    if not books:
        return {
            "message": "No books found",
            "data": []
        }

    # Document API
    first_book = frappe.get_doc("Book", books[1]["name"])

    first_book.status = "Available"
    first_book.save()

    # Database API
    for book in books:
        frappe.db.set_value(
            "Book",
            book["name"],
            "status",
            "Available"
        )

    return {
        "message": "Books fetched and updated successfully",
        "data": books
    }