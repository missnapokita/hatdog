# Masterkit Injector website

This folder is ready for GitHub Pages.

## Publish from an Android phone

1. Create a new public GitHub repository.
2. Upload every file in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.

GitHub will display the free Pages URL after deployment finishes.

## Change app details later

Edit only `site-config.json` to update the version, APK links, Telegram name,
Shizuku tutorial, download count, APK size, developer name, or logos. Use
`headerLogoUrl` for the small logo beside the site name. The shared
`heroLogoUrl` fills all three floating cards. To use three different images,
put their direct links in `heroImage1Url`, `heroImage2Url`, and
`heroImage3Url`. Leave `headerLogoUrl` empty to keep the default yellow **M**.
Keep valid JSON punctuation and quotation marks.

The current APK links point to `example.com` and are placeholders.
