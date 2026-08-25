"""
search.py

Makes the "Book" doctype full-text searchable using Frappe's SQLite search.
"""

import frappe
from frappe.search.sqlite_search import SQLiteSearch


class LibrarySearch(SQLiteSearch):
    # 1. Name of the SQLite file that stores the search index
    INDEX_NAME = "library_search.db"

    # 2. Schema: which fields are full-text searchable vs just filterable
    INDEX_SCHEMA = {
        "text_fields": ["title", "content"],
        "metadata_fields": ["category", "status", "author"],
        "tokenizer": "unicode61 remove_diacritics 2 tokenchars '-_'",
    }

    # 3. Which doctype to index, and base field mapping
    INDEXABLE_DOCTYPES = {
        "Book": {
            "fields": [
                "name",
                {"title": "book_title"},   # Book.book_title -> title
                {"content": "name"},       # placeholder, overwritten in prepare_document below
                "isbn",
                "author",
                "category",
                "status",
                "modified",
            ],
            "filters": {
                "status": ("!=", "Lost"),  # don't index lost books
            },
        },
    }

    def prepare_document(self, doc):
        """Custom document preparation for Book"""
        document = super().prepare_document(doc)
        if not document:
            return None

        if doc.doctype == "Book":
            # Look up the author's actual name (author is a Link field)
            author_name = ""
            if doc.author:
                author_name = frappe.db.get_value("Author", doc.author, "author_name") or doc.author

            # Combine isbn + author + review text into one searchable blob
            review_texts = [
                f"{review.reviewer_name or ''}: {review.comment or ''}"
                for review in doc.get("reviews", [])
                if review.comment
            ]
            content_parts = [
                doc.isbn or "",
                author_name,
                "\n".join(review_texts),
            ]
            document["content"] = "\n".join(filter(None, content_parts))

        return document

    def get_search_filters(self):
        """
        Controls which Books the current user can see in search results.
        A library catalog is usually open to everyone, so no restriction here.
        """
        return {}