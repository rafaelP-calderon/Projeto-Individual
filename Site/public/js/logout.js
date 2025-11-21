username.innerHTML = sessionStorage.USERNAME;

function logout() {
    elements.style.display = 'flex';
    user.style.border = '1px solid #ffffff';
    pfp.style.border = 'none';
    
}

function deletar() {
    elements.style.display = 'none';
    user.style.border = 'none';
    pfp.style.border = '1px solid #fffffff';
}