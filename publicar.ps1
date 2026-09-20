$ErrorActionPreference = "Stop"
$repo = "https://github.com/Oceanette/bonnie-web.git"

if (-not (Get-Command git.exe -ErrorAction SilentlyContinue)) {
    throw "Git nao encontrado."
}

if (Get-Command gh.exe -ErrorAction SilentlyContinue) {
    gh.exe auth switch -u Oceanette
    gh.exe auth setup-git
}

if (-not (Test-Path ".git")) {
    git.exe init
}

$remotes = @(git.exe remote)

if ($remotes -contains "origin") {
    git.exe remote set-url origin $repo
} else {
    git.exe remote add origin $repo
}

git.exe fetch origin main
git.exe reset --soft origin/main
git.exe branch -M main
git.exe add -A

git.exe diff --cached --quiet

if ($LASTEXITCODE -ne 0) {
    git.exe commit -m "ajusta layout responsivo"
}

git.exe push -u origin main

Write-Host ""
Write-Host "PRONTO" -ForegroundColor Green
Write-Host "https://github.com/Oceanette/bonnie-web"
