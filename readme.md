# Memoir Theme for Hugo

Memoir is a theme for the [Hugo](https://gohugo.io) with [Bulma CSS](https://bulma.io).
![](2021-12-11-21-36-21.png)
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

# Credits
Many thanks to
-   [Hugo Northeast theme by @y1zhou](https://github.com/y1zhou/hugo-northeast)
-   [Series create Hugo theme from scratch by @Pakstech](https://pakstech.com/blog/create-hugo-theme/)