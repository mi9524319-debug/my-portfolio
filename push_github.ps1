$git = ".\git-portable\cmd\git.exe"

# Disable all interactive prompts
$env:GIT_TERMINAL_PROMPT = "0"
$env:GCM_INTERACTIVE = "never"
$env:GCM_GUI_PROMPT = "never"

# Configure identity
& $git config --global user.name "Ahmed Mohsin"
& $git config --global user.email "mi9524319@gmail.com"

# Initialize Git
if (!(Test-Path ".git")) {
    & $git init
    & $git branch -M main
    & $git remote add origin "https://github.com/mi9524319-debug/my-portfolio.git"
} else {
    & $git remote set-url origin "https://github.com/mi9524319-debug/my-portfolio.git"
}

# Stage and Commit
Write-Host "Staging files..."
& $git add .
Write-Host "Committing changes..."
& $git commit -m "Initialize customized portfolio website clone"

# Push
Write-Host "Attempting push..."
& $git push -u origin main --force 2>&1
