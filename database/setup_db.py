import psycopg2
import sys
import subprocess
import os

def install_and_import(package):
    try:
        __import__(package)
    except ImportError:
        print(f"[INFO] Package '{package}' not found. Installing...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "psycopg2-binary"])

# Ensure psycopg2 is installed
install_and_import('psycopg2')
import psycopg2

# Configuration
DB_CONFIG = {
    "dbname": "Tutorix",
    "user": "postgres",
    "password": "Mithun1701",
    "host": "localhost",
    "port": "5432"
}

def run_sql_file(cursor, filename):
    print(f"[STEP] Running {filename}...")
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            sql = f.read()
            cursor.execute(sql)
            print(f"[SUCCESS] {filename} applied.")
    except Exception as e:
        print(f"[ERROR] Failed to run {filename}: {e}")
        raise e

def main():
    print("==========================================")
    print("   Tutorix: Python Database Setup")
    print("==========================================")
    
    conn = None
    try:
        # Step 0: Connect to 'postgres' to ensure the target DB exists
        admin_config = DB_CONFIG.copy()
        admin_config["dbname"] = "postgres"
        
        print("[INFO] Connecting to 'postgres' to verify target database...")
        admin_conn = psycopg2.connect(**admin_config)
        admin_conn.autocommit = True
        admin_cur = admin_conn.cursor()
        
        # Check if database exists (case insensitive check)
        admin_cur.execute("SELECT 1 FROM pg_database WHERE datname = 'tutorix'")
        exists = admin_cur.fetchone()
        
        if not exists:
            print("[INFO] Database 'tutorix' does not exist. Creating it now...")
            admin_cur.execute("CREATE DATABASE tutorix")
            print("[SUCCESS] Database 'tutorix' created.")
        else:
            print("[INFO] Database 'tutorix' already exists.")
            
        admin_cur.close()
        admin_conn.close()

        # Step 1: Connect to the actual target database
        target_config = DB_CONFIG.copy()
        target_config["dbname"] = "tutorix" # Use lowercase for safety
        
        conn = psycopg2.connect(**target_config)
        conn.autocommit = True
        cur = conn.cursor()
        
        print(f"[INFO] Connected to target database: {target_config['dbname']}")

        # Apply Schema
        if os.path.exists('schema.sql'):
            run_sql_file(cur, 'schema.sql')
        else:
            print("[ERROR] schema.sql not found.")

        # Apply Seed Data
        if os.path.exists('seed.sql'):
            run_sql_file(cur, 'seed.sql')
        else:
            print("[ERROR] seed.sql not found.")

        cur.close()
        print("\n[COMPLETE] Database setup finished successfully!")

    except Exception as e:
        print(f"\n[FATAL ERROR] {e}")
        print("\nTIP: If you get a 'permission denied' error, make sure your user has 'Createdb' privileges.")
    finally:
        if conn:
            conn.close()

if __name__ == "__main__":
    main()
