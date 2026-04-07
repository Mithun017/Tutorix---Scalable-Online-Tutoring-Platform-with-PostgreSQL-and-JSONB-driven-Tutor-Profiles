@echo off
SETLOCAL
TITLE Tutorix - Python Database Setup

echo ==========================================
echo    Tutorix: Python PostgreSQL Setup
echo ==========================================
echo.

:: Check for Python
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed. Please install it from https://python.org/
    pause
    exit /b
)

:: Navigate to current directory
cd /d %~dp0

:: Run the python setup script
python setup_db.py

echo.
pause
ENDLOCAL
