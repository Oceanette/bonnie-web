$ErrorActionPreference = "Stop"

if (-not (Test-Path ".git")) {
    git init
    git branch -M main
}

git add .

$changes = git status --porcelain
if ($changes) {
    git commit -m "site bilingue pt-en"
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
    git remote add origin https://github.com/Oceanette/bonnie-web.git
}

git push -u origin main
