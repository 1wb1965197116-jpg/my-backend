# Security and setup

The server exposes `/api/tamper`, which lists local Tampermonkey scripts. The frontend is configured to use a hosted backend URL and was not tested against that deployment.

A tracked environment file has contained values resembling GitHub and Render credentials. Treat any real credentials in repository history as exposed. The account owner should revoke or rotate affected credentials with the respective services and update any deployments that use them. Simply changing a file in a new commit does not remove existing history or invalidate a credential. This pull request does not alter, print, or rotate credentials.

Avoid committing environment files and credentials in future. Assess access controls before exposing the API publicly.
