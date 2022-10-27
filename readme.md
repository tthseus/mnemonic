# Memoir

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)
[![made-with-Go](https://img.shields.io/badge/Made%20with-Go-1f425f.svg)](https://go.dev/)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)


Memoir is a clean, elegant, and dark mode supported theme for the [Hugo](https://gohugo.io) blog based on [Bulma CSS](https://bulma.io) and [Hugo Northeast theme by @y1zhou](https://github.com/y1zhou/hugo-northeast).

![](2021-12-11-21-36-21.png)

## [Demo Site](https://tthseus.github.io/)
To see this theme in action, here is a live [demo site](https://tthseus.github.io/) which is rendered with **Memoir** theme.

## Getting Started

Create a new site with Hugo

```bash
#create Hugo site
hugo new site my-site && cd my-site
```

Clone theme and add submodule

```bash
git init
git submodule add https://github.com/tthseus/memoir-theme.git themes/memoir-theme
```

Copy `config.toml` and `exampleSite\content`; Customizing your page.  

```bash
#remove default config
rm config.toml
#copy exampleSite content and config
cp -R themes/memoir-theme/exampleSite/* ./
```
Run server locally or build with public folder.
```bash
hugo server -D
```

## Features

- Responsive layout
- Light/Dark mode
- Search function
- Pagination supported
- Typewriter Effect
- Elegant transparent navigation bar from [Apple Newsroom](https://www.apple.com/newsroom/)
- Easy customize the CSS with [Bulma css](https://bulma.io/)
- Comment system supported by [Disqus](https://disqus.com/)
- Elegant, responsive, flickable carousels by [Flickity](https://github.com/metafizzy/flickity)

## Credits
Many thanks to
-   [Hugo Northeast theme by @y1zhou](https://github.com/y1zhou/hugo-northeast)
-   [Series create Hugo theme from scratch by @Pakstech](https://pakstech.com/blog/create-hugo-theme/)

## Questions, ideas, bugs, pull requests
All feedback is welcome! Head over to the [issue tracker.](https://github.com/tthseus/memoir-theme/issues)

## License
**Memoir** is licensed under the MIT license. Check the [LICENSE](LICENSE) file for details.