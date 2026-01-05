// Simplified JavaScript - No upload functionality needed

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}

// CV Viewer Toggle
function viewCV() {
    const frame = document.getElementById('cvFrame');
    frame.style.display = frame.style.display === 'none' ? 'block' : 'none';
}

// Table Sorting
function sortTable(col) {
    const tbody = document.getElementById('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const dir = tbody.dataset.dir === 'asc' ? 'desc' : 'asc';
    tbody.dataset.dir = dir;
    
    rows.sort((a, b) => {
        const aVal = a.cells[col].textContent;
        const bVal = b.cells[col].textContent;
        return dir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });
    
    rows.forEach(row => tbody.appendChild(row));
}

// Table Filtering
function filterTable() {
    const search = document.getElementById('search').value.toLowerCase();
    const filter = document.getElementById('filter').value;
    const rows = document.getElementById('tbody').getElementsByTagName('tr');
    
    for (let row of rows) {
        const cells = row.getElementsByTagName('td');
        const level = cells[0].textContent;
        const text = row.textContent.toLowerCase();
        
        const matchSearch = text.includes(search);
        const matchFilter = !filter || level === filter;
        
        row.style.display = (matchSearch && matchFilter) ? '' : 'none';
    }
}

// Contact Form Validation
function handleForm(e) {
    e.preventDefault();
    
    let valid = true;
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    const name = document.getElementById('name').value.trim();
    if (name.length < 2) {
        document.getElementById('nameErr').textContent = 'Name must be at least 2 characters';
        valid = false;
    }
    
    const email = document.getElementById('email').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailErr').textContent = 'Invalid email';
        valid = false;
    }
    
    const msg = document.getElementById('msg').value.trim();
    if (msg.length < 10) {
        document.getElementById('msgErr').textContent = 'Message must be at least 10 characters';
        valid = false;
    }
    
    if (valid) {
        alert('Thank you! I will get back to you soon.');
        e.target.reset();
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('menu').classList.remove('active');
        }
    });
});