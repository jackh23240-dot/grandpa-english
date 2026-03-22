# 👴👵 爷爷奶奶学英语 - Grandparent English Learning

一个专为老年人设计的英语学习应用，界面简洁、字体大、发音清晰。

A simple English learning app designed for seniors, with large text, clear audio, and easy navigation.

---

## 🌟 特点 Features

- **📱 大字体 Large Text** - 易于阅读 Easy to read
- **🔊 发音功能 Audio Pronunciation** - 听单词发音 Listen to word pronunciation
- **🎨 简洁界面 Simple Interface** - 操作简单 Easy to navigate
- **🗣️ 100 个常用短语 100 Common Phrases** - 日常生活必备 Essential for daily life
- **🎧 跟读学习模式 Listen & Repeat Mode** - 每个短语学习 10 分钟 Each phrase for 10 minutes
- **📚 8 个课程 8 Lessons** - 家庭、食物、健康、购物等 Family, Food, Health, Shopping, etc.
- **✏️ 练习功能 Practice** - 测试学习效果 Test your learning
- **⭐ 复习功能 Review** - 回顾已学单词 Review learned words
- **💾 自动保存 Auto-save** - 学习进度自动保存 Progress saves automatically
- **🌐 双语支持 Bilingual** - 中英文对照 Chinese-English

---

## 🚀 在线访问 Access Online

### GitHub Pages 托管 Hosting on GitHub Pages

1. **创建 GitHub 仓库 Create GitHub Repository**
   ```bash
   # 在 GitHub 上创建一个新仓库，例如：grandpa-english
   # Create a new repository on GitHub, e.g., grandpa-english
   ```

2. **上传文件 Upload Files**
   ```bash
   cd /home/admin/.openclaw/workspace/grandpa-english
   git init
   git add .
   git commit -m "Initial commit - Grandparent English Learning App"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/grandpa-english.git
   git push -u origin main
   ```

3. **启用 GitHub Pages Enable GitHub Pages**
   - 进入仓库设置 Go to repository settings
   - 点击 "Pages" 点击 "Pages"
   - 选择 "main" 分支 Select "main" branch
   - 点击 "Save" 点击 "Save"

4. **访问应用 Access the App**
   ```
   https://YOUR_USERNAME.github.io/grandpa-english/
   ```

---

## 📖 课程列表 Lessons

| 课程 | 内容 | Words |
|------|------|-------|
| 👨‍👩‍👧 家庭 Family | 家庭成员称呼 | 10 |
| 🍎 食物 Food | 日常食物和饮料 | 10 |
| 🏥 健康 Health | 健康相关词汇 | 10 |
| 🛒 购物 Shopping | 购物常用语 | 10 |
| 🚌 交通 Transportation | 交通工具和出行 | 10 |
| 🌤️ 天气 Weather | 天气相关词汇 | 10 |
| 🎉 节日 Holidays | 节日和庆祝活动 | 10 |
| 🌺 自然 Nature | 大自然相关词汇 | 10 |

**总计 Total: 80 个单词 80 words**

---

## 💡 使用指南 How to Use

### 1. 首页 Home
- 查看学习进度 View learning progress
- 快速开始课程 Quick start lessons
- 每日名言 Daily quote

### 2. 课程 Lessons
- 选择课程 Select a lesson
- 学习单词 Learn words
- 点击 🔊 听发音 Click 🔊 to hear pronunciation

### 3. 练习 Practice
- 测试单词记忆 Test word memory
- 选择题形式 Multiple choice
- 实时反馈 Instant feedback

### 4. 复习 Review
- 查看所有已学单词 View all learned words
- 随时复习 Review anytime

---

## 🛠️ 本地运行 Run Locally

```bash
# 方法 1: 直接打开浏览器
# Method 1: Open directly in browser
open /home/admin/.openclaw/workspace/grandpa-english/index.html

# 方法 2: 使用 Python 服务器
# Method 2: Use Python server
cd /home/admin/.openclaw/workspace/grandpa-english
python3 -m http.server 8080
# 访问 Visit: http://localhost:8080
```

---

## 🎨 自定义 Customization

### 修改颜色 Change Colors
编辑 `styles.css` 中的渐变色：
Edit gradients in `styles.css`:

```css
/* 主色调 Primary color */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 添加课程 Add Lessons
编辑 `app.js` 中的 `lessons` 数组：
Edit the `lessons` array in `app.js`:

```javascript
const lessons = [
    {
        id: 8,
        emoji: '🎵',
        title: '音乐 Music',
        // ... add your content
    }
];
```

### 调整语速 Adjust Speech Speed
编辑 `app.js` 中的语速设置：
Edit speech rate in `app.js`:

```javascript
utterance.rate = 0.8; // 0.5 = 慢，1.0 = 正常，1.5 = 快
// 0.5 = slow, 1.0 = normal, 1.5 = fast
```

---

## 📱 响应式设计 Responsive Design

- ✅ 支持手机 Mobile support
- ✅ 支持平板 Tablet support
- ✅ 支持桌面 Desktop support
- ✅ 大字体 Large fonts
- ✅ 高对比度 High contrast

---

## 🔒 隐私 Privacy

- 所有数据存储在本地 All data stored locally
- 无需登录 No login required
- 无需网络 No internet required (after initial load)
- 使用 localStorage 保存进度 Progress saved in localStorage

---

## 🙏 给老年人的提示 Tips for Seniors

1. **慢慢来 Take your time** - 不用着急 No rush
2. **每天学一点 Learn a little every day** - 10 分钟就好 Just 10 minutes
3. **大声朗读 Read aloud** - 帮助记忆 Helps memory
4. **多听发音 Listen to pronunciation** - 模仿发音 Imitate the sounds
5. **经常复习 Review often** - 温故而知新 Practice makes perfect

---

## 📄 许可证 License

MIT License - 可自由使用和修改 Free to use and modify

---

## 💝 献给所有爱学习的爷爷奶奶 Dedicated to all learning grandparents

> "活到老，学到老"  
> "Never too old to learn"

---

**Made with ❤️ for grandparents everywhere**
