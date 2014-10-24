Porthole
========

A window into your customer issues.

Hits the zendesk API and displays matching zendesk tickets on a github repo.

Zendesk tickets must have a custom field.
The value of the custom field should be in the format:
```
/<github-org>/<github-repo>/issues/<issue-id>
```
