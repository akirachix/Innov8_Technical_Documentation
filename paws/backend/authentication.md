# Authentication

Authentication is implemented with email/password login and bearer access tokens. The relevant source files are app/routers/auth_routers.py, app/services/auth_service.py, app/core/security.py, app/schemas/auth_schema.py, and app/models/user.py.
Login flow
The client sends an email address and password to POST /auth/login.
The service loads the user by email and verifies the password with bcrypt. A dummy bcrypt hash is used when the user does not exist to reduce timing differences.
Five failed attempts to lock the account for ten minutes.
A successful login resets failed attempts, clears the lockout, updates last_login_at, records an activity event, and issues an access token.
The response includes access_token, token_type, role, and must_change_password.
The endpoint is rate-limited to 10/minute. 

# Auth Table

![auth table](/auth-table.png)

The final documentation must cover:

- login flow
- session/token model
- token lifetime
- refresh
- logout
- roles
- permissions
- device authentication
- MQTT authentication
- API authorization
- administrator access