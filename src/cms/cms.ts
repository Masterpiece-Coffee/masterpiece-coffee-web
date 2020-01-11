import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import HomePagePreview from './preview-templates/HomePagePreview';
import CoffeesPagePreview from './preview-templates/CoffeesPagePreview';
import OrderingPagePreview from './preview-templates/OrderingPagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import withEmotion from './withEmotion';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('home', withEmotion(HomePagePreview));
CMS.registerPreviewTemplate('coffees', withEmotion(CoffeesPagePreview));
CMS.registerPreviewTemplate('ordering', withEmotion(OrderingPagePreview));
CMS.registerPreviewTemplate('about', withEmotion(AboutPagePreview));
