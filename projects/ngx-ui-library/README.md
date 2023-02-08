
# ngx ui lib 📚

ngx-ui-lib is a UI library for Angular that provides highly customisable and easy to use components to enhance the user experience, the main component is an image carousel.


# Demo 🎉
[https://ngx-ui-lib.vercel.app](https://ngx-ui-lib.app)


![](https://github.com/rubenperegrina/ngx-ui-lib/public/images/ngx-ui-lib-gif.gif)


# Installation 💻

You can install ngx-ui-lib via npm:

```bash
  npm i ngx-ui-lib
```
    
# Usage 👨‍🎓👩‍🎓

### Module🚝

Import `UiImageGaleryModule` from `ngx-lightbox`

```javascript
import { UiImageGaleryModule } from 'ngx-ui-lib';

@NgModule({
  imports: [ UiImageGaleryModule ]
})
```

### Component🪁


```html
<ngx-ui-image-galery [images]="myImages"></ngx-ui-image-galery>
```


```javascript
import { Images } from 'ngx-ui-lib';
myImages: Images[] = [
    {
    url: '../assets/images/movie1.PNG', //Your image
    name: 'Character 1' //Your alt
    },
    {
    url: '../assets/images/movie2.PNG',
    name: 'Character 2'
    },
    {
    url: '../assets/images/movie3.PNG',
    name: 'Character 3'
    },
]

```
## Contribute👪

Contributions are always welcome!

For make a contribution:

Clone the project, and install dependencies.

```bash
$ git clone https://github.com/rubenperegrina/ngx-ui-lib.git
$ npm install
```

Create a new branch

```bash
$ git checkout -b feature/someFeature
or
$ git checkout -b hotfix/someFix
```

Make sure everything is running properly

Commit & push, and make a pull request!
## Authors🙌

- [@rubenperegrina](https://github.com/rubenperegrina)