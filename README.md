<h1 align="center" id="title">@keiko/app-react-matomo</h1>
---

<p align="center"><img src="https://socialify.git.ci/keiko-app/react-matomo/image?description=1&amp;font=Source%20Code%20Pro&amp;forks=1&amp;issues=1&amp;language=1&amp;name=1&amp;owner=1&amp;pulls=1&amp;stargazers=1&amp;theme=Auto" alt="project-image" with="75%"></p>

## 🧐 Features

Here're some of the project's best features:

- Easily integrate matomo analytics tracker
- Track the page views
- Track the user's events throughout the ReactJS application

## 🛠️ Installation Steps

Install the module from NPM registry

**npm:**

```bash
npm install --save @keiko-app/react-matomo
```

**yarn:**

```bash
yarn add @keiko-app/react-matomo
```

Set the config and add the provider to you `App.tsx` page:

```tsx
import { MatomoProviderConfig } from "@keiko-app/react-matomo";

const config: MatomoProviderConfig = {
	trackerBaseUrl: "https://base.url.of.your.tracker",
	siteId: 1,
};

const App = () => {
	<MatomoProvider config={config}>
		<YourComponents />	
	</MatomoProvider>
};

export { App };
```

The hook `useMatomo()` is now available on all your subcomponents. 




## 🔧 Options

| Option | Required? | Description | Example |
| --------- | --------- | ------- | ------ |
| `trackerBaseUrl` | ✅ | The **base URL** of your matomo installation. This must not include `matomo.php` or `matomo.js` | `https://tracking.mywebsite.eu` |
| `siteId` |  ✅ | The site identifier. This can be retrieved from your matomo dashboard. |

## 💖 What is keiko?

## 📚 History

This project is based on the deprecated package `matomo-tracker` by @jonkoops. It may not contain all the features yet, but it is still a work in progress.  

## 🛡️ License

This project is licensed under the MIT
