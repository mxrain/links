// const axios = require('axios'); // 替换成你使用的 HTTP 库

const dataContainer = document.getElementById('data-container');
fetch('./db.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const element = document.createElement('div');
            element.textContent = 
            `
            ${item.text} - ${item.link}
            `;
            dataContainer.appendChild(element);
        });
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

// 页面加载完成时执行
window.onload = function () {
    // 获取 Cookie 中的 github_token 参数
    const githubtoken = getCookie('github_token');

    // 如果存在 github_token 参数
    if (githubtoken) {
        const inputElement = document.getElementById('github-token');
        inputElement.value = githubtoken;
    } else {
        // 如果不存在参数，可以执行其他操作，例如提示用户输入参数
        console.log('Cookie 中未找到 github_token 参数。');
        // ...
    }
};

// 获取 Cookie 值的函数
function getCookie(name) {
    const cookie = document.cookie;
    const parts = cookie.split('; ');
    for (let i = 0; i < parts.length; i++) {
        const pair = parts[i].split('=');
        if (pair[0] === name) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}

// 打开表单的函数
function openForm() {
    document.getElementById('form-popup').style.display = 'block';
}

// 关闭表单的函数
function closeForm() {
    document.getElementById('form-popup').style.display = 'none';
}

// 保存 GitHub API 的函数
function saveGithubtoken(token) {
    document.cookie = `github_token=${encodeURIComponent(token)}; path=/;`;
}

// 监听表单提交事件
const form = document.getElementById('github-token-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const githubtoken = document.getElementById('github-token').value;
    saveGithubtoken(githubtoken);
    closeForm();
});

// 绑定按钮点击事件
document.getElementById('open-form-button').addEventListener('click', openForm);