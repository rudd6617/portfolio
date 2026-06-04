# Rudolf Chen — Portfolio

陳麒方的個人作品集網站，部署於 GitHub Pages。

**Live:** https://rudd6617.github.io/portfolio （部署後生效）

## Stack

- 純靜態 HTML + CSS + vanilla JS
- TailwindCSS 3 **預編譯**為靜態 `assets/tailwind.css`（非 CDN runtime，零瀏覽器端編譯）
- Google Fonts：Inter / JetBrains Mono / Noto Sans TC
- GitHub Actions → GitHub Pages 自動部署（部署本身仍純靜態，無 build step）

## 結構

```
.
├── index.html              # 單頁作品集
├── assets/
│   ├── style.css           # 自訂樣式（exp / project / skill 卡片、動畫）
│   ├── tailwind.css        # Tailwind 編譯產物（提交進 repo）
│   ├── main.js             # nav scroll spy + reveal + 手機選單
│   └── favicon.svg
├── src/tailwind.css        # Tailwind 編譯來源
├── tailwind.config.js      # 主題色票 / 字體 / content 掃描
├── package.json            # 建置工具（tailwindcss devDependency）
├── .github/workflows/
│   └── deploy.yml          # Pages 自動部署
└── .nojekyll               # 跳過 Jekyll 處理
```

## 樣式重新編譯

改動 `index.html` 若新增/移除 Tailwind class，需重新編譯並提交產物：

```bash
npm install        # 首次：安裝 tailwindcss
npm run build:css  # 重新產生 assets/tailwind.css
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
