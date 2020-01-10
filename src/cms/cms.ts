import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import HomePagePreview from './preview-templates/HomePagePreview';
import CoffeesPagePreview from './preview-templates/CoffeesPagePreview';
import OrderingPagePreview from './preview-templates/OrderingPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('coffees', CoffeesPagePreview);
CMS.registerPreviewTemplate('ordering', OrderingPagePreview);
