// Add any custom JavaScript here
document.addEventListener('DOMContentLoaded', function() {
    // Confirm before deleting
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            if (!confirm('Are you sure you want to delete this expense?')) {
                e.preventDefault();
            }
        });
    });
});