# Rudolf Chen — Portfolio

陳麒方的個人作品集網站，部署於 GitHub Pages。

**Live:** https://rudd6617.github.io/portfolio （部署後生效）

## Stack

- 純靜態 HTML + CSS + vanilla JS（零 build step）
- TailwindCSS via CDN
- Google Fonts：Inter / JetBrains Mono / Noto Sans TC
- GitHub Actions → GitHub Pages 自動部署

## 結構

```
.
├── index.html              # 單頁作品集
├── assets/
│   ├── style.css           # 自訂樣式（exp / project / skill 卡片、動畫）
│   └── main.js             # nav scroll spy + reveal-on-scroll
├── .github/workflows/
│   └── deploy.yml          # Pages 自動部署
└── .nojekyll               # 跳過 Jekyll 處理
```

## 本機預覽

直接用瀏覽器開 `index.html`，或：

```bash
python3 -m http.server 8080
# 瀏覽 http://localhost:8080
```

## 部署到 GitHub Pages

1. 在 GitHub 建立 repo（例如 `portfolio` 或 `rudd6617.github.io`）
2. 推上來：
   ```bash
   git init
   git add .
   git commit -m "init portfolio"
   git branch -M main
   git remote add origin git@github.com:rudd6617/portfolio.git
   git push -u origin main
   ```
3. GitHub repo → Settings → Pages → **Source** 改為 **GitHub Actions**
4. 等 Actions 跑完，網址即可訪問

> 若 repo 名稱用 `rudd6617.github.io`，網址會是 `https://rudd6617.github.io/`；用其他名稱則是 `https://rudd6617.github.io/<repo-name>/`。

## 更新內容

所有資料硬編碼在 `index.html` 內，直接編輯該檔再 push 即可。`resume_*.json` 已加入 `.gitignore`，避免將履歷原始檔公開。

## License

個人作品集，內容請勿轉用。程式碼結構可參考。
