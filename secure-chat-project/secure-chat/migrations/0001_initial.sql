-- migrations/0001_initial.sql
-- Initial database schema for secure chat application

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
);

-- Create access_codes table
CREATE TABLE IF NOT EXISTS access_codes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL,
  created_by TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (unixepoch()),
  active INTEGER NOT NULL DEFAULT 1,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Insert default users
INSERT OR IGNORE INTO users (id, name, email, password) VALUES 
('user1', 'User One', 'user1@example.com', 'password1'),
('user2', 'User Two', 'user2@example.com', 'password2');

-- Insert default access code
INSERT OR IGNORE INTO access_codes (code, created_by) VALUES 
('secure123', 'user1');
