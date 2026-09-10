import frappe
def get_context(context):
    context.title="Our Team"
    context.no_cache=True
    article=frappe.get_all("User", filters={"enabled":1},fields=["full_name","email"])
    context.users=article
    return context