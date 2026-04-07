@echo off
SETLOCAL
TITLE Tutorix - Database Setup

echo ==========================================
echo    Tutorix: PostgreSQL Database Setup
echo ==========================================
echo.

:: Configuration
SET DB_NAME=Tutorix
SET DB_USER=Mithun1701

echo [INFO] Target Database: %DB_NAME%
echo [INFO] User Credentials: %DB_USER%
echo.

:: Check for psql
where psql >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] PostgreSQL 'psql' utility not found. Please ensure it's in your PATH.
    pause
    exit /b
)

echo [STEP 1] Creating schema...
psql -U %DB_USER% -d %DB_NAME% -f schema.sql
if %errorlevel% neq 0 (
    echo [ERROR] Failed to apply schema.sql. Ensure the 'Tutorix' database exists.
    pause
    exit /b
)

echo [STEP 2] Seeding data...
psql -U %DB_USER% -d %DB_NAME% -f seed.sql
if %errorlevel% neq 0 (
    echo [ERROR] Failed to apply seed.sql.
    pause
    exit /b
)

echo.
echo ==========================================
echo    Database Setup Completed Successfully!
echo ==========================================
echo.
pause
ENDLOCAL
