#!/bin/bash

# Grandparent English - GitHub Setup Script
# 爷爷奶奶英语 - GitHub 设置脚本

echo "======================================"
echo "🚀 GitHub Pages 设置向导"
echo "GitHub Pages Setup Wizard"
echo "======================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git 未安装 | Git not installed"
    echo "请先安装 Git: sudo apt install git"
    echo "Please install Git first: sudo apt install git"
    exit 1
fi

echo "✅ Git 已安装 | Git installed"
echo ""

# Get GitHub username
read -p "请输入你的 GitHub 用户名 | Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ 用户名不能为空 | Username cannot be empty"
    exit 1
fi

echo ""
echo "📝 你的 GitHub 用户名 | Your GitHub username: $GITHUB_USERNAME"
echo ""

# Configure git user
read -p "请输入你的邮箱 (用于 Git 提交) | Enter your email (for Git commits): " USER_EMAIL

if [ -z "$USER_EMAIL" ]; then
    echo "❌ 邮箱不能为空 | Email cannot be empty"
    exit 1
fi

git config user.email "$USER_EMAIL"
git config user.name "$GITHUB_USERNAME"

echo ""
echo "📦 准备上传到 GitHub..."
echo "Preparing to upload to GitHub..."
echo ""

# Create remote URL
REMOTE_URL="https://github.com/${GITHUB_USERNAME}/grandpa-english.git"

echo "🔗 仓库地址 | Repository URL:"
echo "$REMOTE_URL"
echo ""

# Add remote
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"

echo "======================================"
echo "✅ 设置完成！| Setup Complete!"
echo "======================================"
echo ""
echo "📋 下一步 | Next Steps:"
echo ""
echo "1. 在 GitHub 上创建新仓库 | Create a new repository on GitHub:"
echo "   - 访问 | Visit: https://github.com/new"
echo "   - 仓库名 | Repository name: grandpa-english"
echo "   - 设为公开 | Make it Public"
echo "   - 不要勾选 README | Do NOT check README"
echo ""
echo "2. 上传代码 | Upload code:"
echo "   git push -u origin main"
echo ""
echo "3. 启用 GitHub Pages | Enable GitHub Pages:"
echo "   - 进入仓库设置 | Go to repository Settings"
echo "   - 点击 Pages | Click Pages"
echo "   - 选择 main 分支 | Select main branch"
echo "   - 保存 | Save"
echo ""
echo "4. 访问网站 | Access your website:"
echo "   https://${GITHUB_USERNAME}.github.io/grandpa-english/"
echo ""
echo "======================================"
echo "💡 需要帮助？查看 DEPLOY.md 获取详细指南"
echo "Need help? Check DEPLOY.md for detailed guide"
echo "======================================"
echo ""
