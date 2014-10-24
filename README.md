Porthole
========

A window into your customer issues.

Hits the zendesk API and displays matching zendesk tickets on a github repo.

Zendesk tickets must have a custom field.
The value of the custom field should be in the format:
```
/<github-org>/<github-repo>/issues/<issue-id>
```

## Quickstart

- [Install from Chrome Webstore](https://chrome.google.com/webstore/detail/porthole/jlmnbfebhbnenomfoodmcidndccnfapa)
- Click `options` and configure the credentials

## Install Other Versions
- Download the crx file.
- Drag it onto the Chrome Extensions settings page.
- Click `options` and configure the credentials

## Zendesk Setup
- Log into Zendesk
- Click the "Gear" (aka Admin) Icon in the lower left corner
- Click "Ticket Fields" under "Manage"
- Click "add custom field"
- Select "Regular Expression"
- Give the field a sensible name (May we suggest "Github Issue"?)
- Enter the following regular expression: `\/?[\w-]+\/[\w-]+\/(issues|pull)\/\d+`
- Click "Update field"
