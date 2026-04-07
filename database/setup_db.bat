@echo off
SETLOCAL
TITLE Tutorix - Database Setup

echo ==========================================
echo    Tutorix: PostgreSQL Database Setup
echo ==========================================
echo.

:: Configuration
SET "DATABASE_URL=postgresql://postgres:Mithun1701@localhost:5432/hope_db"

echo [INFO] Connecting to: hope_db
echo [INFO] Connection String: postgresql://postgres:***@localhost:5432/hope_db
echo.

:: Search for psql.exe in common installation directories if not in PATH
where psql >nul 2>nul
if %errorlevel% neq 0 (
    echo [INFO] psql not found in PATH. Searching common installation directories...
    
    for %%V in (17, 16, 15, 14, 13) do (
        if exist "C:\Program Files\PostgreSQL\%%V\bin\psql.exe" (
            set "PATH=C:\Program Files\PostgreSQL\%%V\bin;%PATH%"
            echo [INFO] Found psql in C:\Program Files\PostgreSQL\%%V\bin
            goto psql_found
        )
    )

    echo [ERROR] PostgreSQL 'psql' utility not found. 
    echo Please install PostgreSQL or add the 'bin' folder to your PATH.
    pause
    exit /b
)

:psql_found

echo [STEP 1] Creating schema...
psql "%DATABASE_URL%" -f schema.sql
if %errorlevel% neq 0 (
    echo [ERROR] Failed to apply schema.sql. Ensure the 'hope_db' database exists.
    pause
    exit /b
)

echo [STEP 2] Seeding data...
psql "%DATABASE_URL%" -f seed.sql
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
