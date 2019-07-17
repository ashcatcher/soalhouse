## Layouts

- [x]exhibit:
    - [x] Individual Product Page
    - [.] Optional Snipcart Buy it now Button for e-commerce
      - [ ] Toggle presence of Snipcart e-commerce object
      - [ ] Toggle various snipcart meta information
    - [ ] Optional Make Offer Button instead of/in addition to Add to Cart
      - [.] Include Contact Form at bottom of exhibit page
    - [x] Footer Gallery containing other works by Artist
        - [ ] Conditional logic for condition where Artist has only 1 piece

- [x]exhibits:
    - [X] Product Gallery View
    - [X] Exhibit:Artisan mapping relationship
    - [.] Optional Categories
    - [ ] Optional display of pricing on gallery cards
    - [ ] Conditional logic for Art without an associated Artisan

- [x] artisan:
    - [ ] Name Attribute
      - [ ] Linked in Layout
      - [ ] Linked in Admin
      - [ ] Linked in Form Submissions
      - [ ] Linked in Snipcart SKU
      - [ ] Linked in Facebook Opengraph Data
    - [ ] Image Attribute
      - [ ] Linked in Layout
      - [ ] Linked in Admin
      - [ ] Alt Tags
      - [ ] Thumbnail URL
    - [ ] Relational Data FILE
      - [ ] Artisan.contact.number
      - [ ] ARtisan.contact.email
      - [ ] Artisan.contact.phone

    - [ ] Contact Form after Gallery


# soalhouse.ca - based upon the [Solace Jekyll Theme](https://github.com/ashcatcher/solace)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6c6bbcd4-7a27-4626-98ed-ce06c5b89522/deploy-status)](https://app.netlify.com/sites/soalhouse/deploys)

## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) & [Bundler](https://bundler.io/) - `$ gem install jekyll bundler`
2. [NodeJS](http://nodejs.org) - use the installer, Homebrew, etc.
3. [Yarn](https://yarnpkg.com/en/) - `brew install yarn` _**(Optional)**_
4. [Netlify](https://www.netlify.com/) - Give the client an interface to manage their site with a simple CMS. _**(Suggested for Clients)**_


## Local Development & Installation

1. Clone this repo, or download it into a directory of your choice.

    ```shell
    git clone https://github.com/ashcatcher/solace.git
    ```
2. Inside the directory, run `npm install` -> **FYI** you can use `yarn` in place of `npm`

    ```shell
    cd flightdeck
    npm install
    ```

## Usage

**Note:** you can replace `npm` with `yarn`

### Start Development

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

  ```shell
  npm start
  ```

### Production Build

This will set the `JEKYLL_ENV` to `production` and use the production config file(s) set in `flightdeck.manifest.js` to override default setting.
You can easily deploy your site build with the command.

```shell
npm run build
```

### Deploy

You can set your server deployment options inside of `flightdeck.manifest.js` If you wish to deploy after the build process has completed.

```shell
npm run deploy
```

## Want more?

To display all available commands just run:

```shell
npm run
```

### Jekyll

As this is just a Jekyll project, you can use any of the commands listed in their [docs](https://jekyllrb.com/docs/usage/)

## What's inside Solace

- [gulp](http://gulpjs.com/)
- [Sass](http://sass-lang.com/)
- [PostCSS](http://postcss.org/)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Webpack](https://webpack.github.io/)
- [imagemin](https://github.com/imagemin/imagemin)
- [Browsersync](https://www.browsersync.io/)

## Configurations and Defaults

You can change the configurations by editing `flightdeck.manifest.js`.

- ### port

    default: `4000`
    options: integer

- ### tasks

    Tasks to run when you exec `yarn start` or `gulp` commands.

    - #### imagemin

        To minify images.

        default: `true`
        options: boolean (`true` / `false`)

    - #### sass

        To compile Sass.

        default: `true`
        options: boolean (`true` / `false`)

    - #### server

        To compile sources via Jekyll and to keep browsers in sync with file changes via Browsersync.

        default: `true`
        options: boolean (`true` / `false`)

    - #### webpack

        To bundle JavaScript files.

        default: `true`
        options: boolean (`true` / `false`)

    - #### deploy

        Deploys using `gulp-rsync` to chosen server.

        default: `flase`
        options: boolean (`true` / `false`)

- ### paths

    Settings about paths.

    - #### dest

        The destination directory for the whole project.

        default: `"_site"`
        options: string

    - #### posts

        The directory of posts source files.

        default: `"_posts"`
        options: string

    - #### assets

        The directory to gather all assets.

        default: `"./assets"`
        options: string
        example: `"./"` (directly under the theme direcotry)

    - #### css

        The CSS destination directory for Sass.

        default: `"css"`
        options: string
        example: `"stylesheets"`

    - #### js

        The JavaScript destination directory for Browserify.

        default: `"js"`
        options: string
        example: `"javascripts"`

    - #### images

        The destination directory of compressed image files for imagemin.

        default: `"images"`
        options: string
        example: `"img"`

    - #### sass

        The directory of Sass files.

        default: `"_sass"`
        options: string
        example: `"src/sass"`

    - #### jsSrc

        The directory of JavaScript source files to bundle up by Browserify.

        default: `"_js"`
        options: string
        example: `"src/js`"

    - #### imagesSrc

        The directory of image source files to compress.

        default: `"_images"`
        options: string
        example: `"src/images"`

- ### jekyll

    Jekyll settings.

    - #### config

        Jekyll config files.

        - ##### default

            The default Jekyll config file(s).

            default: `"_config.yml"`
            options: string (`"FILE1[,FILE2,...]"`)
            example: `"_config1.yml,_config2.yml"`

        - ##### development

            Development mode config file(s) to override default settings.

            default: `""`
            options: string (`"FILE1[,FILE2,...]"`)
            example: `"_config_development"`

        - ##### production

            Production mode config file(s) to override default settings.

            default: `""`
            options: string (`"FILE1[,FILE2,...]"`)
            example: `"_config_production"`

- ### sass

    Sass settings.

    - #### outputStyle

        The output style of Sass.

        default: `"compressed"`
        options: `"expanded"`, `"nested"`, `"compact"`, `"compressed"`

- ### autoprefixer

    Autoprefixer settings.

    - #### browsers

        List of browsers, which are supported in your theme.

        default: `["> 1%", "last 2 versions", "Firefox ESR"]`
        options: array. See [Browserslist docs](https://github.com/ai/browserslist#queries) for available queries.
        example: `["> 5%", "last 2 versions", "IE 8"]`

- ### js

    JavaScript settings.

    - #### entry

        File name(s) of JavaScript entry points.

        default: `["main.js"]`
        options: array
        example: `["pluginA.js", "pluginB.js", "main.js"]`

- ### deploy

    Deployment settings.

    uses any of the [`gulp-rsync`](https://www.npmjs.com/package/gulp-rsync) parameters
    - #### remote

        server IP or ServerName _(if using ssh agentforwarding)_
    - #### root

        path to web root index of your choosen webserver
    - #### exlude

        excluding files/folder inside of the `_site` folder - this is editable with the Jekyll settings
    - #### dryrun

        does a dryrun to make sure there are no configuration errors - set to `false` to deploy to your production _(remote)_ server.

        default: `true`  options: `true` or `false`
