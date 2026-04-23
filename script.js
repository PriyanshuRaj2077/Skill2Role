// roleDatabase is now loaded from data.js

// Theme Logic
const themeSelect = document.getElementById('theme-select');
const savedTheme = localStorage.getItem('skill2role-theme') || 'light';

// Set initial theme
themeSelect.value = savedTheme;
applyTheme(savedTheme);

themeSelect.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    applyTheme(selectedTheme);
    localStorage.setItem('skill2role-theme', selectedTheme);
});

function applyTheme(theme) {
    // Remove all theme classes first
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-soft-blue', 'theme-midnight', 'theme-minimal-gray');
    
    // Add the new theme class
    document.body.classList.add(`theme-${theme}`);
}

// Bookmark Logic
function loadSavedRoles() {
    return JSON.parse(localStorage.getItem('skill2role-saved') || '[]');
}

function saveRole(roleName) {
    const saved = loadSavedRoles();
    if (saved.includes(roleName)) {
        return; // Already saved
    }
    saved.push(roleName);
    localStorage.setItem('skill2role-saved', JSON.stringify(saved));
    renderSavedRoles();
}

function removeSavedRole(roleName) {
    let saved = loadSavedRoles();
    saved = saved.filter(r => r !== roleName);
    localStorage.setItem('skill2role-saved', JSON.stringify(saved));
    renderSavedRoles();
}

function renderSavedRoles() {
    const saved = loadSavedRoles();
    const savedSection = document.getElementById('saved-roles-section');
    const savedContainer = document.getElementById('saved-roles-container');
    
    savedContainer.innerHTML = '';
    
    // Always ensure section is visible
    if (savedSection.classList.contains('hidden')) {
        savedSection.classList.remove('hidden');
    }
    
    if (saved.length === 0) {
        savedContainer.innerHTML = '<p class="hint-text">No saved roles yet.</p>';
        return;
    }
    
    saved.forEach(roleName => {
        const card = document.createElement('div');
        card.className = 'role-card';
        
        card.innerHTML = `
            <div class="role-header" style="margin-bottom: 0;">
                <div class="role-name">${roleName}</div>
                <div class="role-actions" style="margin-top: 0;">
                    <button class="role-btn btn-open">Open</button>
                    <button class="role-btn btn-remove" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">Remove</button>
                </div>
            </div>
        `;
        
        const cleanRoleName = roleName.replace(' ✨ (Suggested)', '');
        
        card.querySelector('.btn-open').addEventListener('click', (e) => {
            e.stopPropagation();
            window.open("https://www.google.com/search?q=How+to+become+" + encodeURIComponent(cleanRoleName), "_blank");
        });
        
        card.querySelector('.btn-remove').addEventListener('click', (e) => {
            e.stopPropagation();
            removeSavedRole(roleName);
        });
        
        savedContainer.appendChild(card);
    });
}

// Populate the interest dropdown dynamically
document.addEventListener('DOMContentLoaded', () => {
    renderSavedRoles();
    const interestSelect = document.getElementById('interest');
    
    for (const [categoryName, interests] of Object.entries(interestCategories)) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = categoryName;
        
        const sortedInterests = [...interests].sort();
        
        sortedInterests.forEach(interest => {
            const option = document.createElement('option');
            option.value = interest;
            option.textContent = interest;
            optgroup.appendChild(option);
        });
        
        interestSelect.appendChild(optgroup);
    }
});

function getDynamicDiscovery(interest, userSkills) {
    const patterns = discoveryPatterns[interest] || [];
    return patterns.map(role => {
        const requiredSkills = role.skills.map(s => s.toLowerCase());
        let matchedCount = 0;
        const missingSkills = [];
        requiredSkills.forEach(reqSkill => {
            const hasSkill = userSkills.some(userSkill => 
                reqSkill === userSkill || 
                (userSkill.length >= 3 && reqSkill.includes(userSkill)) ||
                (reqSkill.length >= 3 && userSkill.includes(reqSkill))
            );
            if (hasSkill) matchedCount++;
            else missingSkills.push(reqSkill);
        });
        const matchPercentage = requiredSkills.length > 0 
            ? Math.round((matchedCount / requiredSkills.length) * 100) 
            : 0;
        return {
            name: role.name + ' ✨ (Suggested)',
            matchPercentage,
            missingSkills,
            requiredSkills
        };
    });
}

document.getElementById('find-roles-btn').addEventListener('click', () => {
    const interestSelect = document.getElementById('interest');
    const selectedInterests = Array.from(interestSelect.selectedOptions).map(opt => opt.value);
    const skillsInput = document.getElementById('skills').value;
    
    if (selectedInterests.length === 0) {
        alert("Please select at least one interest.");
        return;
    }

    // Clean user skills: lowercase, split by comma, trim whitespace, remove empty
    const userSkills = skillsInput
        .toLowerCase()
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    let allRoles = [];
    selectedInterests.forEach(interest => {
        const roles = roleDatabase[interest] || [];
        allRoles = allRoles.concat(roles);
    });
    
    // Remove duplicates
    const uniqueRolesMap = new Map();
    allRoles.forEach(role => {
        if (!uniqueRolesMap.has(role.name.toLowerCase())) {
            uniqueRolesMap.set(role.name.toLowerCase(), role);
        }
    });
    const uniqueRoles = Array.from(uniqueRolesMap.values());
    
    const results = uniqueRoles.map(role => {
        const requiredSkills = role.skills.map(s => s.toLowerCase());
        
        let matchedCount = 0;
        const missingSkills = [];

        requiredSkills.forEach(reqSkill => {
            const hasSkill = userSkills.some(userSkill => 
                reqSkill === userSkill || 
                (userSkill.length >= 3 && reqSkill.includes(userSkill)) ||
                (reqSkill.length >= 3 && userSkill.includes(reqSkill))
            );

            if (hasSkill) {
                matchedCount++;
            } else {
                missingSkills.push(role.skills[role.skills.findIndex(s => s.toLowerCase() === reqSkill)]);
            }
        });

        const matchPercentage = requiredSkills.length > 0 
            ? Math.round((matchedCount / requiredSkills.length) * 100) 
            : 0;

        return {
            name: role.name,
            matchPercentage,
            missingSkills,
            requiredSkills
        };
    });

    // Dynamic Discovery
    let discoveryResults = [];
    selectedInterests.forEach(interest => {
        discoveryResults = discoveryResults.concat(getDynamicDiscovery(interest, userSkills));
    });
    
    if (discoveryResults.length > 0) {
        const existingNames = new Set(results.map(r => r.name.toLowerCase()));
        discoveryResults.forEach(dr => {
            const cleanName = dr.name.replace(' ✨ (Suggested)', '').toLowerCase();
            if (!existingNames.has(cleanName)) {
                existingNames.add(cleanName);
                results.push(dr);
            }
        });
    }

    // Sort by highest match percentage
    results.sort((a, b) => b.matchPercentage - a.matchPercentage);

    displayResults(results);
});

function displayResults(results) {
    const resultsSection = document.getElementById('results');
    const rolesContainer = document.getElementById('roles-container');
    
    rolesContainer.innerHTML = '';
    
    if (results.length === 0) {
        rolesContainer.innerHTML = '<p>No roles found for this interest.</p>';
    } else {
        results.forEach(result => {
            const card = document.createElement('div');
            card.className = 'role-card';

            let matchClass = 'match-low';
            if (result.matchPercentage >= 70) matchClass = 'match-high';
            else if (result.matchPercentage >= 40) matchClass = 'match-medium';

            const missingSkillsHtml = result.missingSkills.length > 0 
                ? result.missingSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')
                : '<span class="skill-tag" style="background:var(--match-high-bg, rgba(0,122,255,0.08));color:var(--accent-blue);border-color:var(--match-high-border, rgba(0,122,255,0.2));">None! Fully Matched</span>';

            const matchedCount = result.requiredSkills.length - result.missingSkills.length;
            const saved = loadSavedRoles();
            const isSaved = saved.includes(result.name);

            card.innerHTML = `
                <div class="role-header">
                    <div class="role-name">${result.name}</div>
                    <div class="match-percentage ${matchClass}">${result.matchPercentage}% Match</div>
                </div>
                <div class="role-stats">
                    You are ${result.matchPercentage}% ready for this role. You matched ${matchedCount} skill${matchedCount!==1?'s':''} and need ${result.missingSkills.length} more.
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${result.matchPercentage}%"></div>
                </div>
                <div class="skills-info">
                    <p><strong>Missing Skills:</strong></p>
                    <div class="missing-skills">
                        ${missingSkillsHtml}
                    </div>
                </div>
                <div class="role-actions">
                    <button class="role-btn btn-search">Search</button>
                    <button class="role-btn btn-watch">Watch</button>
                    <button class="role-btn btn-save">${isSaved ? 'Saved' : 'Save'}</button>
                </div>
            `;
            
            const cleanRoleName = result.name.replace(' ✨ (Suggested)', '');
            
            card.addEventListener('click', () => {
                window.open("https://www.google.com/search?q=How+to+become+" + encodeURIComponent(cleanRoleName), "_blank");
            });
            
            card.querySelector('.btn-search').addEventListener('click', (e) => {
                e.stopPropagation();
                window.open("https://www.google.com/search?q=How+to+become+" + encodeURIComponent(cleanRoleName), "_blank");
            });
            
            card.querySelector('.btn-watch').addEventListener('click', (e) => {
                e.stopPropagation();
                window.open("https://www.youtube.com/results?search_query=How+to+become+" + encodeURIComponent(cleanRoleName), "_blank");
            });

            card.querySelector('.btn-save').addEventListener('click', (e) => {
                e.stopPropagation();
                if (e.target.textContent !== 'Saved') {
                    saveRole(result.name);
                    e.target.textContent = 'Saved';
                } else {
                    alert("Already saved");
                }
            });
            
            rolesContainer.appendChild(card);
        });
    }

    resultsSection.classList.remove('hidden');
}
