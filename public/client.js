const API_URL = "http://localhost:3000/entries";

// Load entries when the page loads
document.addEventListener("DOMContentLoaded", loadEntries);

// Handle form submission
document.getElementById("entryForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const entryData = {
        name: document.getElementById("name").value,
        eventTimeStamp: document.getElementById("eventTimeStamp").value || null,
        category: document.getElementById("category").value,
        country: document.getElementById("country").value,
        description: document.getElementById("description").value
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(entryData)
        });

        if (!response.ok) {
            const err = await response.json();
            alert(err.error || "Error creating entry");
            return;
        }

        alert("Entry created successfully!");
        e.target.reset(); // clear form
        loadEntries();

    } catch (error) {
        alert("Something went wrong creating the entry.");
    }
});

// Load all entries
async function loadEntries() {
    const container = document.getElementById("entriesContainer");
    container.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(API_URL);
        const entries = await response.json();

        container.innerHTML = ""; // Clear

        entries.forEach(entry => {
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${entry.name}</h5>
                            <p><strong>Category:</strong> ${entry.category}</p>
                            <p><strong>Country:</strong> ${entry.country}</p>
                            <p><strong>Date:</strong> ${entry.eventtimestamp || "N/A"}</p>
                            <p>${entry.description.substring(0, 120)}...</p>

                            <button class="btn btn-warning btn-sm" onclick="editEntry('${entry.name}')">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteEntry('${entry.name}')">Delete</button>
                        </div>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        container.innerHTML = "<p>Error loading entries.</p>";
    }
}

// Delete an entry
async function deleteEntry(name) {
    if (!confirm(`Delete entry "${name}"?`)) return;

    try {
        const response = await fetch(`${API_URL}/${name}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            alert("Could not delete entry");
            return;
        }

        alert("Entry deleted!");
        loadEntries();

    } catch (error) {
        alert("Error deleting entry");
    }
}

// Placeholder for editing (can build next)
function editEntry(name) {
    alert(`Edit functionality coming soon for entry: ${name}`);
}
