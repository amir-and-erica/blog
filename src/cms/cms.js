import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('../layouts/style.css')
CMS.registerPreviewStyle('../layouts/template-styles/blog-post-style-1.css')
CMS.registerPreviewTemplate('blog', BlogPostPreview)
