
const axios = require('axios'); // 替换成你使用的 HTTP 库
// 读取token

// verifyToken 函数

async function verifyToken(token) {
  // 在这里实现验证逻辑，例如通过 API 请求验证 token 的有效性
  // 返回 true 表示验证通过，false 表示验证失败
  // 这里只是示例，实际应用中需要根据实际情况进行修改
  return true;
}
const getUserInfo = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user info: ${error}`);
    return null;
  }
};