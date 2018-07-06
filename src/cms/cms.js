import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css') //-- path is absolute from built project
CMS.registerPreviewTemplate('blog', BlogPostPreview)
