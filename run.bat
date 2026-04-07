@echo off
SETLOCAL
TITLE Tutorix - Setup and Run

echo ==========================================
echo    Tutorix: Scalable Tutoring Platform
echo ==========================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install it from https://nodejs.org/
    pause
    exit /b
)

:: Navigate to frontend
cd frontend

:: Check if node_modules exists
if not exist node_modules (
    echo [INFO] node_modules not found. Installing dependencies...
    cmd /c npm install
) else (
    echo [INFO] Dependencies already installed.
)

echo.
echo [INFO] Starting the Frontend Development Server...
echo [INFO] Access the application at http://localhost:5173
echo.

:: Wait for server to start (3 seconds)
timeout /t 3 /nobreak >nul

:: Automatically open browser
start http://localhost:5173

:: Run dev server
cmd /c npm run dev

ENDLOCAL
pause
