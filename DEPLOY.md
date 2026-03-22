# 🚀 部署指南 Deployment Guide

## 方法 1: GitHub Pages (推荐 Recommended)

### 步骤 1: 创建 GitHub 账号
如果你还没有 GitHub 账号：
1. 访问 https://github.com
2. 点击 "Sign up"
3. 填写信息创建账号

### 步骤 2: 创建新仓库
1. 登录 GitHub
2. 点击右上角 **"+"** 图标
3. 选择 **"New repository"**
4. 填写仓库名称，例如：`grandpa-english`
5. 选择 **"Public"** (公开)
6. **不要** 勾选 "Initialize this repository with a README"
7. 点击 **"Create repository"**

### 步骤 3: 上传代码

#### 方法 A: 使用命令行 (推荐)
在终端执行以下命令：

```bash
# 进入项目目录
cd /home/admin/.openclaw/workspace/grandpa-english

# 配置 Git (第一次使用需要)
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# 初始化仓库
git init
git branch -m main

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit - Grandparent English Learning App"

# 连接到 GitHub (替换 YOUR_USERNAME 为你的 GitHub 用户名)
git remote add origin https://github.com/YOUR_USERNAME/grandpa-english.git

# 上传
git push -u origin main
```

#### 方法 B: 手动上传 (无需命令行)
1. 在 GitHub 仓库页面
2. 点击 **"uploading an existing file"**
3. 拖拽以下文件到上传区域：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
4. 填写提交信息："Initial commit"
5. 点击 **"Commit changes"**

### 步骤 4: 启用 GitHub Pages
1. 在 GitHub 仓库页面，点击 **"Settings"** (设置)
2. 在左侧菜单找到并点击 **"Pages"**
3. 在 **"Build and deployment"** 下：
   - Source: 选择 **"Deploy from a branch"**
   - Branch: 选择 **"main"** 分支
   - Folder: 选择 **"/ (root)"**
4. 点击 **"Save"**

### 步骤 5: 访问你的网站
等待 1-2 分钟，然后访问：
```
https://YOUR_USERNAME.github.io/grandpa-english/
```

**恭喜！你的网站已经上线了！** 🎉

---

## 方法 2: 本地运行 (测试用)

### 直接打开
```bash
# 在浏览器中直接打开
firefox /home/admin/.openclaw/workspace/grandpa-english/index.html
# 或
google-chrome /home/admin/.openclaw/workspace/grandpa-english/index.html
```

### 使用本地服务器
```bash
# 进入项目目录
cd /home/admin/.openclaw/workspace/grandpa-english

# 启动服务器
python3 -m http.server 8001

# 在浏览器访问
# http://localhost:8001
```

---

## 📱 分享给爷爷奶奶

### 方式 1: 发送链接
将 GitHub Pages 链接发送给他们：
```
https://YOUR_USERNAME.github.io/grandpa-english/
```

### 方式 2: 创建二维码
1. 访问 https://www.qr-code-generator.com/
2. 输入你的网站链接
3. 下载二维码图片
4. 打印出来给爷爷奶奶

### 方式 3: 添加到手机主屏幕
1. 用手机浏览器打开网站
2. 点击浏览器的 **"分享"** 按钮
3. 选择 **"添加到主屏幕"**
4. 像普通 APP 一样使用

---

## ⚙️ 自定义设置

### 修改语速
编辑 `app.js`，找到这行：
```javascript
utterance.rate = 0.8; // 0.5 = 慢，1.0 = 正常，1.5 = 快
```
- `0.5` = 很慢
- `0.8` = 较慢 (推荐)
- `1.0` = 正常速度
- `1.5` = 快

### 修改学习时间
编辑 `app.js`，找到这行：
```javascript
let audioLearningTimeLeft = 600; // 10 分钟 (600 秒)
```
- `300` = 5 分钟
- `600` = 10 分钟 (默认)
- `900` = 15 分钟
- `1800` = 30 分钟

### 添加新短语
编辑 `app.js`，在 `commonPhrases` 数组中添加：
```javascript
{ id: 101, chinese: '你的中文', english: 'Your English', category: '类别' },
```

### 修改颜色
编辑 `styles.css`，找到：
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
可以改成其他颜色组合。

---

## 🔧 常见问题

### Q: 网站打不开？
A: 检查：
1. GitHub Pages 是否正确启用
2. 等待 2-5 分钟让 GitHub 构建
3. 确认仓库是 Public (公开)

### Q: 语音功能不工作？
A: 确保：
1. 设备音量已打开
2. 浏览器支持语音合成 (Chrome/Edge/Safari 都支持)
3. 不是静音模式

### Q: 如何更新内容？
A: 
1. 修改文件
2. 保存
3. 重新上传到 GitHub
4. 等待 1-2 分钟自动更新

### Q: 可以离线使用吗？
A: 可以！第一次加载后，大部分功能可以离线使用（语音功能需要网络）。

---

## 📞 需要帮助？

如果遇到问题：
1. 检查浏览器控制台 (按 F12) 查看错误信息
2. 确保所有文件都在同一个文件夹
3. 检查文件名是否正确（区分大小写）

---

**祝爷爷奶奶学习愉快！** 🎓❤️
