// 模拟 db/list.json 数据
const listData = {
  "hot": [
    { "title": "热门电影1", "link": "/movie/1", "cover": "movie-1.jpg" },
    { "title": "热门游戏1", "link": "/game/1", "cover": "game-1.jpg" },
    // ...更多热门资源
  ],
  "recommend": [
    { "title": "推荐资源1", "link": "/anime/1", "cover": "anime-1.jpg" },
    { "title": "推荐资源2", "link": "/course/1", "cover": "course-1.jpg" },
    // ...更多推荐资源
  ],
  "latest": [
    { "title": "最新资源1", "link": "/tv/1", "cover": "tv-1.jpg" },
    { "title": "最新资源2", "link": "/ebook/1", "cover": "ebook-1.jpg" },
    // ...更多最新资源
  ],
  "top": [
    { "title": "收益最高资源1", "link": "/song/1", "cover": "song-1.jpg" },
    { "title": "收益最高资源2", "link": "/other/1", "cover": "other-1.jpg" },
    // ...更多收益最高资源
  ]
};

// 模拟 db/info.json 数据
const infoData = {
  "socialMedia": [
    { "icon": "wechat-icon.svg", "link": "https://weixin.qq.com" },
    { "icon": "qq-icon.svg", "link": "https://www.qq.com" },
    // ...其他社交媒体链接
  ],
  "declaration": "Copyright © 2023 资源桶. All Rights Reserved."
};

// 获取列表数据并渲染
function renderResourceList(listId, listType) {
  const listContainer = document.getElementById(listId);
  const listItems = listData[listType];

  listItems.forEach(item => {
    const listItem = document.createElement('div');
    listItem.classList.add('resource-item');
    listItem.innerHTML = `
      <img src="${item.cover}" alt="${item.title}">
      <div class="info">
        <div class="title">${item.title}</div>
        <div class="description">${item.title} 描述</div>
      </div>
    `;
    listContainer.appendChild(listItem);
  });
}

// 渲染推荐资源列表
renderResourceList('recommendList', 'recommend');

// 渲染热门资源列表
renderResourceList('hotList', 'hot');

// 渲染最新资源列表
renderResourceList('latestList', 'latest');

// 渲染收益最高资源列表
renderResourceList('topList', 'top');

// 渲染社交媒体链接
function renderSocialMedia() {
  const socialMediaContainer = document.querySelector('.social-media');
  infoData.socialMedia.forEach(item => {
    const socialMediaLink = document.createElement('a');
    socialMediaLink.href = item.link;
    socialMediaLink.target = "_blank";
    socialMediaLink.innerHTML = `<img src="${item.icon}" alt="${item.link}">`;
    const socialMediaItem = document.createElement('li');
    socialMediaItem.appendChild(socialMediaLink);
    socialMediaContainer.appendChild(socialMediaItem);
  });
}

renderSocialMedia();

// 渲染声明信息
function renderDeclaration() {
  const declarationContainer = document.querySelector('.footer-right p');
  declarationContainer.textContent = infoData.declaration;
}

renderDeclaration();