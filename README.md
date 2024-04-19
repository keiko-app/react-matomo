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

| Option | Type | Required? | Description | Example |
| --- | --- | --- | --- | --- |
| `trackerBaseUrl` | String | ✅ | The **base URL** of your matomo installation. This must not include `matomo.php` or `matomo.js` | `https://track.me.eu` |
| `siteId` |  String or Number | ✅ | The site identifier. This can be retrieved from your matomo dashboard. | `1` |
| `disableTracking` | Boolean | - | When set to `true`, tracking will be stopped. Useful for GDPR🇪🇺 compliance or development websites | `false` |
| `urlTransformer` | Function (see below) | - | Transform function that will modify the URL and set it as a custom URL. Usefull to remove sensitive informations (ids...) from URLs | See below |

### Transform URLs using `urlTransformer`

There is an option to modify URLs before sending them to the matomo instance. This is particularly useful to remove sensitive informations such as IDs from the URLs. This method accepts one parameter (string) and must return a string. 

#### Example use case - removing UUIDs from the URL: 
```typescript
const urlTransformer: (url: string) => {
	const UUIDV4_REGEX = new RegExp(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/, "g");
	return url.replaceAll(UUIDV4_REGEX, "**MASKED**");
};

const config: MatomoProviderConfig = {
	trackerBaseUrl: "https://base.url.of.your.tracker",
	siteId: 1,
	urlTransformer
};
```

## 💖 What is keiko?

## 📚 History

This project is based on the deprecated package `matomo-tracker` by @jonkoops. It may not contain all the features yet, but it is still a work in progress.  

## 🛡️ License

This project is licensed under the MIT
